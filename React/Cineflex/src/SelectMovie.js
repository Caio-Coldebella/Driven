import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PageTop from "./PageTop";
import styled from "styled-components";

export default function SelectMovie(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const req = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        req.then(res => {setMovies(res.data)});
    },[]);
    return(
        <>
            <PageTop redirect={'/'} visible={false}><p>Selecione o Filme</p></PageTop>
            <CONTENT>
                {movies.map((item) => {return <Link key={item.id} to={`/sessoes/${item.id}`}><POSTER src={item.posterURL}/></Link>})}
            </CONTENT>
        </>
    );
}

const POSTER = styled.img`
    width: 129px;
    height: 193px;
    margin-bottom: 27px;
`;
const CONTENT = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: 100vw;
    column-gap: 46px;
    padding: 0 38px 0 38px;
`;
