import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CreateHabitButton({days, setDays, name, number}){
    const [on, setOn] = useState(false);
    useEffect(()=>{
        for(let i=0; i<days.length; i++){
            if(days[i]===number){
                setOn(true);
                break;
            }
        }
    },[]);
    function addDay(num){
        for(let i=0; i<days.length; i++){
            if(days[i] === num){
                days.splice(i,1);
                setDays(days);
                return;
            }
        }
        days.push(num)
        setDays(days);
    }
    return(
        <>
        <BUTTON onClick={()=>{addDay(number);setOn(!on)}} isSet={on}>
            {name}
        </BUTTON>
        </>
    );
}
const BUTTON = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-right: 4px;
    font-size: 20px;
    color: ${props => props.isSet? "#FFFFFF": "#CFCFCF"};
    background-color: ${props=> props.isSet? "#CFCFCF" : "#FFFFFF"};
`;