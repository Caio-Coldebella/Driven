import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import CreateHabit from "./CreateHabit";
import Habit from "./Habit";

export default function Habits(){
    const user = useContext(UserContext);
    const config = {headers:{Authorization: `Bearer ${user.user.token}`}};
    const [habits, setHabits] = useState([]);
    const [nohabits,setNohabits] = useState(null);
    const [createhabit,setCreatehabit] = useState(null);
    const [newhabit, setNewhabit] = useState(null);
    useEffect(()=>{
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
        promisse.then(res => {
            setHabits(res.data);
            if(res.data.length === 0){
                setNohabits(<NOHABITS>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</NOHABITS>);
            }
        });
    },[newhabit]);
    function deleteHabit(index){
        const habitdeleted = habits[index];
        const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitdeleted.id}`,config);
        promisse.then(()=>{setNewhabit(habitdeleted)});
    }
    return(
        <>
        <Topbar/>
        <CONTENT>
            <TOPCONTENT>
                <TXT>Meus hábitos</TXT>
                <ADD onClick={()=>{setCreatehabit(<CreateHabit setNewhabit={setNewhabit} setCreatehabit={setCreatehabit} />)}}>+</ADD>
            </TOPCONTENT>
            {createhabit}
            {habits.map((item,index)=> { return <Habit key={index} id={index} name={item.name} days={item.days} deleteHabit={deleteHabit}/>})}
            {nohabits}
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
const TOPCONTENT = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 35px;
    width: 100%;
    margin: 22px 0 22px 0;
`;
const TXT = styled.p`
    font-size: 23px;
    color: #126BA5;
`;
const ADD = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    font-size: 27px;
    color: #FFFFFF;
`;
const NOHABITS = styled.p`
    font-size: 18px;
    color: #666666;
`;