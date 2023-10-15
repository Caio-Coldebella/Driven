import { React,useEffect, useState,useContext } from "react";
import PulseLoader from '@bit/davidhu2000.react-spinners.pulse-loader';
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import CreateHabitButton from "./CreateHabitButton";
import axios from "axios";
import NewhabitContext from "../contexts/NewhabitContext";

export default function CreateHabit(props){
    const user = useContext(UserContext);
    const [name,setName] = useState("");
    const [days,setDays] = useState([]);
    const {previous, setPrevious} = useContext(NewhabitContext);
    const [daybutton, setDaybutton] = useState([]);
    const [disable, setDisable] = useState(false);
    const [textbutton, setTextbutton] = useState("Salvar");
    const arrdays = ["D","S","T","Q","Q", "S","S"];
    useEffect(()=>{
        let arr = arrdays.map((item,index)=>{return <CreateHabitButton key={index} days={previous.days !== null? previous.days: days} setDays={setDays} name={item} number={index}/>;});
        setDaybutton(arr);
    },[]);
    function sendData(event){
        event.preventDefault();
        setDisable(true);
        setTextbutton(<PulseLoader color="#FFFFFF"/>);
        const objpost = {
            name: (name?name:previous.name),
            days: ((days.length>0)?days:previous.days)
        };
        const config = {headers:{
            Authorization: `Bearer ${user.user.token}`
            }
        };
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",objpost,config);
        promisse.then(res =>{props.setNewhabit([res.data]);setDisable(false);setTextbutton("Salvar");props.setCreatehabit(null);setPrevious({name: null, days: null});});
        promisse.catch(() => {alert("Preencha o nome do hábito");setDisable(false);setTextbutton("Salvar")})
        return null;
    }
    return(
        <FORM onSubmit={sendData}>
            <div>
            <INPUT type="text" disabled={disable} value={name} placeholder={previous.name? previous.name:"nome do hábito"} onChange={e=> {setName(e.target.value)}}/>
            <BUTTONS disable={disable}>
                {daybutton}
            </BUTTONS>
            </div>
            <SUBMITBUTTONS>
                <CANCEL disabled={disable} onClick={()=> {setPrevious({name: (name?name:previous.name), days: ((days.length>0)?days:previous.days)});props.setCreatehabit(null)}}>Cancelar</CANCEL>
                <SAVE disabled={disable} type="submit">{textbutton}</SAVE>
            </SUBMITBUTTONS>
        </FORM>
    );
}
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 180px;
    padding: 16px 16px 16px 16px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #FFFFFF;
`;
const INPUT = styled.input`
    display: flex;
    align-items: center;
    height: 45px;
    width: 100%;
    padding-left: 8px;
    margin-bottom: 8px;
    font-size: 20px;
    color: #DBDBDB;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`;
const BUTTONS = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
    pointer-events: ${props => props.disable? "none": "all"};
`;
const SUBMITBUTTONS = styled.div`
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    width: 180px;
    height: 35px;
`;
const CANCEL = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-size: 16px;
    color: #52b6ff;
`;
const SAVE = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    font-size: 16px;
    color: #FFFFFF;
`;