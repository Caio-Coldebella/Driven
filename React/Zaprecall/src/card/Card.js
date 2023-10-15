import React from "react";
import AnsweredCard from "../answeredcard/AnsweredCard";
import setinha from "../assets/setinha.png";
import "./card.css";

export default function Card(props){
    
    const stateanswer = <div className="boxquestionopen" key={props.index}>
        <p>{props.item.answer}</p>
        <div className="answeroptions">
            <button className="naolembro" onClick={()=>{props.addanswer("naolembro");setCardstate(<AnsweredCard type={"naolembro"} num={props.index}/>)}}>Não lembrei</button>
            <button className="quase" onClick={()=>{props.addanswer("quase");setCardstate(<AnsweredCard type={"quase"} num={props.index}/>)}}>Quase não lembrei</button>
            <button className="zap" onClick={()=>{props.addanswer("zap");setCardstate(<AnsweredCard type={"zap"} num={props.index}/>)}}>Zap!</button>
        </div>
    </div>;

    const stateopened = <div className="boxquestionopen" key={props.index}>
        <p>{props.item.question}</p>
        <img src={setinha} alt="setinha" onClick={()=>{setCardstate(stateanswer)}}/>
    </div>;

    const stateclosed = <div className="boxquestion" key={props.index}>
        <p>Questao {props.index+1}</p>
        <ion-icon name="play-outline" onClick={()=>{setCardstate(stateopened)}}></ion-icon>
    </div>;

    const [cardstate, setCardstate] = React.useState(stateclosed);
    
    return(
        <>
        {cardstate}
        </>
    );
}