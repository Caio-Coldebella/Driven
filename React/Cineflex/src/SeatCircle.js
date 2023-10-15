import { useEffect, useState } from "react";
import styled from "styled-components";

function listofselected(seats,set,Name,Id,sel){
    for(let i=0; i<=seats.length; i++){
        if(i === seats.length && sel){
            set([...seats, {name:Name, id:Id}]);
        }else if(seats[i] !== undefined && seats[i].name === Name && !sel){
            if(seats.length > 1){
                seats.splice(i,1);
                set(seats);
            }else{
                set([]);
            }
            break;
        }else if(seats[i]!==undefined && seats[i].name===Name){
            break;
        }
    }
}

export default function SeatCircle(props){
    const [sel, setSel] = useState(false);
    useEffect(()=>{listofselected(props.seats,props.set,props.name,props.seatid,sel)},[sel]);
    return(
        <CIRCLE available={props.isAvailable} selected={sel} onClick={() => {props.isAvailable ? setSel(!sel): alert("Esse assento não está disponível")}}>{props.name}</CIRCLE>
    );
}
const colornotaval = "#FBE192";
const colornotsel = "#C3CFD9";
const colorsel = "#8DD7CF";
const CIRCLE = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${props => {
        if(props.available){
            if(props.selected){
                return colorsel;
            }
            return colornotsel;
        }
        return colornotaval;
    }};
`;