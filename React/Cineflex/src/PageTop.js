import styled from "styled-components";
import arrow from "./assets/arrow.png";
import { useNavigate } from "react-router-dom";
export default function PageTop(props){
    const navigate = useNavigate();
    let back = null;
    if(props.visible){
        back = <BACK src={arrow} onClick={()=>{navigate(props.redirect)}}></BACK>;
    }
    return(
        <>
        <BAR>
            {back}
            <TITLE>CINEFLEX</TITLE>
        </BAR>
        <SELECT>{props.children}</SELECT>
        </>
    );
}

const BAR = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 67px;
    width: 100vw;
    background-color: #C3CFD9;
`;
const TITLE = styled.p`
    font-size: 34px;
    color: #E8833A;
`;
const SELECT = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #293845;
    font-size: 24px;
    height: 110px;
    width: 100vw;
    margin-top: 67px;
`;
const BACK = styled.img`
    position: fixed;
    top: 15px;
    left: 10%;
    z-index: 2;
    width: 40px;
    height: 40px;
`;