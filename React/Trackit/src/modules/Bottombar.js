import styled from "styled-components";
import {React, useContext} from "react";
import TasksContext from "../contexts/TasksContext";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function Bottombar(){
    const navigate = useNavigate();
    const progress = useContext(TasksContext);
    return(
        <>
        <PROGRESSBAR onClick={()=>{navigate("/hoje")}}>
            <CircularProgressbar
        value={progress.progress*100}
        text={`Hoje`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
        </PROGRESSBAR>
        <BOTTOM>
            <Link to="/habitos" style={{textDecoration:"none"}}><TEXT>Hábitos</TEXT></Link>
            <Link to="/historico" style={{textDecoration:"none"}}><TEXT>Histórico</TEXT></Link>
        </BOTTOM>
        </>
    );
}

const PROGRESSBAR = styled.div`
    position: fixed;
    bottom: 10px;
    left: calc(50% - 45.5px);
    z-index: 2;
    height: 91px;
    width: 91px;
    & :hover{
        cursor: pointer;
    }
`;
const BOTTOM = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 35px 0 35px;
    background-color: #FFFFFF;
`;
const TEXT = styled.p`
    color: #52B6FF;
    font-size: 18px;
`;