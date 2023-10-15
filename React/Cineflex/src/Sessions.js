import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageTop from "./PageTop";
import SessionDay from "./SessionDay";
import PageBottom from "./PageBottom";
import styled from "styled-components";
export default function Sessions(){
    const id = useParams().idFilme;
    const [sessions, setSessions] = useState({});
    const [days, setDays] = useState([]);
    useEffect(()=>{
        const req = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`);
        req.then(res => {setSessions(res.data);setDays(res.data.days)});
    },[]);
    return(
        <>
        <PageTop redirect={"/"} visible={true}><p>Selecione o Horário</p></PageTop>
        <PAGE>{days.map((day,index) => {return <SessionDay key={index} weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>})}</PAGE>
        <PageBottom image={sessions.posterURL}><p>{sessions.title}</p></PageBottom>
        </>
    );
}

const PAGE = styled.div`
    margin-bottom: 147px;
`;