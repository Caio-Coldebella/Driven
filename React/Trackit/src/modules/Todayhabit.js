import { useState, useContext} from "react";
import UserContext from "../contexts/UserContext";
import TasksContext from "../contexts/TasksContext";
import styled from "styled-components";
import okay from "../assets/check-lg.svg";
import axios from "axios";

export default function Todayhabit(props){
    const user = useContext(UserContext);
    const {progress,setProgress} = useContext(TasksContext);
    const config = {headers:{Authorization: `Bearer ${user.user.token}`}};
    const [marked, setMarked] = useState(props.done);
    const [current, setCurrent] = useState(props.current);
    const [highest, setHighest] = useState(props.highest);
    function togglehabit(){
        if(marked){
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,null,config);
            promisse.then(()=>{setMarked(false);
                setCurrent(current - 1)});
                setProgress(progress - (1/props.noftasks));
                if(props.isrecord){
                    setHighest(highest -1);
                }
        }else{
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,null,config);
            promisse.then(()=>{setMarked(true);
                setCurrent(current + 1)});
                setProgress(progress + (1/props.noftasks));
                if(props.isrecord){
                    setHighest(highest +1);
                }
        }
    }
    return (
        <CONTENT>
            <TITLE>{props.name}</TITLE>
            <TXT isset={marked} isrecord={props.isrecord}>
                <p>Seqûencia atual: <em>{current} dias</em></p>
                <EMrecord isset={marked} isrecord={props.isrecord}>Seu recorde: <em>{highest} dias</em></EMrecord>
            </TXT>
            <COMPLETE onClick={togglehabit} isset={marked}>
                <OK src={okay}/>
            </COMPLETE>
        </CONTENT>
    );
}

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    height: 94px;
    width: 100%;
    margin-bottom: 10px;
    padding: 13px 13px 13px 13px;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #666666;
`;
const TITLE = styled.p`
    font-size: 20px;
`;
const TXT = styled.div`
    font-size: 13px;
    line-height: 15px;
    & em{
        color: ${props => props.isset? "#8FC549" : "#666666"};
    }
`;
const EMrecord = styled.div`
    & em{
        color: ${props => (props.isset && props.isrecord)? "#8FC549" : "#666666"};
    }
`;
const COMPLETE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 13px;
    top: 13px;
    height: 69px;
    width: 69px;
    border-radius: 5px;
    background-color: ${props => props.isset? "#8FC549": "#EBEBEB"};
`;
const OK = styled.img`
    width: 40px;
    height: 40px;
`;