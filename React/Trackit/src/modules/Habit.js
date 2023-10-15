import { useEffect, useState } from "react";
import styled from "styled-components";
import trash from "../assets/trash.svg";

export default function Habit({id,name,days,deleteHabit}){
    const namedays = ["D","S","T","Q","Q","S","S"];
    const [datadays,setDatadays] = useState([]);
    const [ativated, setAtivated] = useState(false);
    useEffect(()=>{
        let j=0;
        let daystrue = [];
        for(let i=0; i<7; i++){
            if(j<days.length && i===days[j]){
                daystrue.push(true);
                j++;
                continue;
            }
            daystrue.push(false);
        }
        setDatadays(daystrue.map((item,index)=>{return <SQUARE key={index} isSet={item}>{namedays[index]}</SQUARE>}));
    },[]);
    return(
        <CONTENT>
            <TXT>{name}</TXT>
            <TABLEDAYS>
                {datadays}
            </TABLEDAYS>
            <TRASH src={trash} onClick={()=> {setAtivated(true)}}/>
            <ALERT ativated={ativated}>
                <TXT>Tem certeza que deseja deletar este hábito?</TXT>
                <div>
                    <CANCEL onClick={()=> {setAtivated(false)}}>Cancelar</CANCEL>
                    <CONFIRM onClick={()=> {deleteHabit(id);setAtivated(false)}}>Confirmar</CONFIRM>
                </div>
            </ALERT>
        </CONTENT>
    );
}
const ALERT = styled.div`
    display: ${props => props.ativated? "flex": "none"};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 25%;
    top: calc(50% - 70px);
    z-index: 2;
    width: 50%;
    height: 140px;
    padding: 8px 8px 8px 8px;
    border: 1px solid #666666;
    border-radius: 10px;
    background-color: #FFFFFF;
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
const CONFIRM = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    font-size: 16px;
    color: #FFFFFF;
`;
const CONTENT = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    padding: 16px 16px 16px 16px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #FFFFFF;
`;
const TRASH = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
`;
const TXT = styled.p`
    font-size: 20px;
    color: #666666;
`;
const SQUARE = styled.div`
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
const TABLEDAYS = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
`;