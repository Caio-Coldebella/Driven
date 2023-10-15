import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionDay(props){
    return(
        <>
            <DATE>{props.weekday} - {props.date}</DATE>
            <TIME>{props.showtimes.map((item,index) => <Link key={index} style={{textDecoration:"none"}} to={`/assentos/${item.id}`}><SQUARE>{item.name}</SQUARE></Link>)}</TIME>
        </>
    );
}

const DATE = styled.p`
    font-size: 20px;
    color: #293845;
    margin-left: 24px;
`;
const TIME = styled.div`
    display: flex;
    column-gap: 8px;
    row-gap: 8px;
    margin: 25px 0 25px 24px;
`;
const SQUARE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
`;