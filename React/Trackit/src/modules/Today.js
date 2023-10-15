import dayjs from 'dayjs';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import NewhabitContext from '../contexts/NewhabitContext';
import Bottombar from "./Bottombar";
import Todayhabit from './Todayhabit';
import Topbar from "./Topbar";
import TasksContext from '../contexts/TasksContext';

function translate (string){
    switch (string) {
        case "0":
            return "Domingo";
        case "1":
            return "Segunda-feira"
        case "2":
            return "Terça-feira";
        case "3":
            return "Quarta-feira";
        case "4":
            return "Quinta-feira";
        case "5":
            return "Sexta-feira";
        case "6":
            return "Sábado";
        default:
            return null;
    }
}
export default function Today(){
    const user = useContext(UserContext);
    const {progress,setProgress} = useContext(TasksContext);
    const previous = useContext(NewhabitContext);
    const [habits,setHabits] = useState([]);
    const config = {headers:{Authorization: `Bearer ${user.user.token}`}};
    const weekday = translate(dayjs().format('d'));
    const date = dayjs().format('D/MM');
    useEffect(()=>{
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
        promisse.then( res => {setHabits(res.data)});
    },[previous.previous]);
    useEffect(()=>{
        let prog = 0;
        const len = habits.length;
        for(let i=0; i<len; i++){
            if(habits[i].done){
                prog += (1/len);
            }
        }
        setProgress(prog);
    },[habits]);
    return(
        <>
            <Topbar/>
            <CONTENT>
                <Toptext>
                    <DATE>{weekday}, {date}</DATE>
                    {(progress>0.1)? <p style={{color: "#8FC549"}}>{Math.round(progress*100)}% dos hábitos concluídos</p>: <p>Nenhum hábito concluido ainda</p>}
                </Toptext>
                {(habits.length>0)? habits.map((item,index) => {let isrecord=false;
                if(item.highestSequence === item.currentSequence){isrecord=true} 
                return <Todayhabit key={index} id={item.id} name={item.name} done={item.done} 
                current={item.currentSequence} highest={item.highestSequence} isrecord={isrecord} 
                noftasks={habits.length}/>;}): <NOHABITS>Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!</NOHABITS>}
            </CONTENT>
            <Bottombar/>
        </>
    );
}
const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding: 0 18px 0 18px;
    margin: 70px 0 70px 0;
`;
const Toptext = styled.div`
    margin: 30px 0 30px 0;
    font-size: 18px;
    color: #bababa;
`;
const DATE = styled.p`
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 5px;
`;
const NOHABITS = styled.p`
    font-size: 18px;
    color: #666666;
`;