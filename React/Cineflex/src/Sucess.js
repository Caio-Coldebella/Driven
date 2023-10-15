import PageTop from "./PageTop";
import styled from "styled-components";
import Orderdata from "./Orderdata";
import {useNavigate} from "react-router-dom";
export default function Sucess(){
    const order = (Orderdata())[0];
    const navigate = useNavigate();
    return(
        <>
            <PageTop redirect={'/'} visible={false}><TITLE>Pedido feito<br/>com sucesso!</TITLE></PageTop>
            <PAGE>
                <CHILD><p>Filme e sessão</p><p>{order.title}</p><p>{order.session}</p></CHILD>
                <CHILD><p>Ingressos</p>{order.tickets.map((a,index) => <p key={index}>{a}</p>)}</CHILD>
                <CHILD><p>Comprador</p><p>{order.name}</p><p>{order.cpf}</p></CHILD>
                <BUTTONFORM onClick={()=>{navigate('/')}}>Voltar para Home</BUTTONFORM>
            </PAGE>
        </>
    );
}

const TITLE = styled.p`
    font-weight: bold;
    color: #247A6B;
`;
const PAGE = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    padding: 0 24px 0 24px;
`;
const CHILD = styled.div`
    margin-bottom: 50px;
    font-size: 22px;
    & :first-child{
        font-weight: bold;
        margin-bottom: 5px;
    };
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