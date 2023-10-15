import { useParams , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageTop from "./PageTop";
import SeatCircle from "./SeatCircle";
import styled from "styled-components";
import Orderdata from "./Orderdata";
import PageBottom from "./PageBottom";

export default function Seats(){
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedseats, setSelectedseats] = useState([]);
    const [personName, setPersonName] = useState("");
    const [cpf, setCpf] = useState("");
    const set = (Orderdata())[1];
    useEffect(()=>{
        const req = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        req.then(res => {setData(res.data); setSeats(res.data.seats)});
    },[]);
    function sendData(event){
        event.preventDefault();
        const name = `Nome: ${personName}`;
        const CPF = `CPF: ${cpf}`;
        const session = `${data.day.date} ${data.name}`;
        const title = `${data.movie.title}`;
        let tickets = [];
        for(let i=0; i<selectedseats.length; i++){
            tickets.push(`Assento ${selectedseats[i].name}`);
        }
        const seatobj = selectedseats.map(item => {return Number(item.id)})
        const obj = {
            ids: seatobj,
            name: personName,
            cpf: cpf
        };
        set(name,CPF,session,title,tickets);
        const end = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",obj);
        end.then(() => {setSelectedseats([]);navigate('/sucesso')});
    }
    return(
        <>
        <PageTop redirect={`/sessoes/${data.movie? data.movie.id: ""}`} visible={true}><p>Selecione o(s) assento(s)</p></PageTop>
        <PAGE>
        <SEATSBOARD>{seats.map( (seat,index) => {return <SeatCircle key={index} set={setSelectedseats} seats={selectedseats} name={seat.name} seatid={seat.id} isAvailable={seat.isAvailable}/>})}</SEATSBOARD>
        <SEATSEXAMPLE>
            <EXAMPLE>
                <CIRCLE color={"#8DD7CF"}></CIRCLE>
                Selecionado
            </EXAMPLE>
            <EXAMPLE>
                <CIRCLE color={"#C3CFD9"}></CIRCLE>
                Disponível
            </EXAMPLE>
            <EXAMPLE>
                <CIRCLE color={"#FBE192"}></CIRCLE>
                Indisponível
            </EXAMPLE>
        </SEATSEXAMPLE>
        <FORM onSubmit={sendData}>
            Nome do comprador:
            <INPUTFORM type="text" value={personName} required onChange={e => setPersonName(e.target.value)} placeholder="Digite seu nome..."/>
            CPF do comprador:
            <INPUTFORM type="text" value={cpf} required onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
            <BUTTONFORM type="submit">Reservar assento(s)</BUTTONFORM>
        </FORM>
        </PAGE>
        <PageBottom image={data.movie? data.movie.posterURL:null}><p>{data.movie? data.movie.title:null}</p><p>{data.day? data.day.weekday:null} - {data.name}</p></PageBottom>
        </>
    );
}
const PAGE = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    padding: 0 24px 0 24px;
    margin-bottom: 147px;
`;

const SEATSBOARD = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    row-gap: 18px;
    column-gap: 9px;
`;
const SEATSEXAMPLE = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin: 15px 0 50px 0;
    column-gap: 30px;
`;
const EXAMPLE = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    color: #4E5A65;
    font-size: 13px;
`;
const CIRCLE = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${props => props.color};
`;
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    height: auto;
    width: 100%;
`;
const INPUTFORM = styled.input`
    height: 50px;
    width: 100%;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    margin: 3px 0 10px 0;
    ::placeholder{
        color: #AFAFAF;
        font-size: 18px;
        font-style: italic;
    }
`;
const BUTTONFORM = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 225px;
    border: none;
    border-radius: 3px;
    background-color: #E8833A;
    margin: 60px auto 0 auto;
    color: #FFFFFF;
    font-size: 18px;
`;