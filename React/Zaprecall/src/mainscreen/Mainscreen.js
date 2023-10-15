import React from "react";
import Card from "../card/Card";
import decks from "../decks";
import logopequeno from "../assets/logo-pequeno.png";
import sad from "../assets/sad.png";
import party from "../assets/party.png";
import "./mainscreen.css"

function addcheck(arranswers,setBottombarclass,setAnswers,error,nameicon){
    arranswers.push(<ion-icon key={arranswers.length} name={nameicon}></ion-icon>);
    if(arranswers.length === 8){//all answered
        setBottombarclass("bottombar extended");
        if(error){
            setAnswers([<span key={11}><img src={sad} alt="sad"/> Putz...</span>,<div key={12}><p>Ainda faltam alguns...</p><p>Mas não desanime!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
        }else{
            setAnswers([<span key={11}><img src={party} alt="party"/> Parabéns!</span>,<div key={12}><p>Você não esqueceu de</p><p>nenhum flashcard!</p></div>,<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
        }
    }
    else{
        setAnswers([<p key={0}>{arranswers.length}/8 concluídos</p>,<div key={10}>{arranswers}</div>]);
    }   
}

export default function Mainscreen(props){
    const deck = (decks(props.seldeck));
    let arranswers = [];
    let error = false;
    const [bottombarclass, setBottombarclass] = React.useState("bottombar");
    const [answers, setAnswers] = React.useState([<p key={0}>0/8 concluídos</p>]);
    function addanswer(option){
        if(option==="zap"){
            addcheck(arranswers,setBottombarclass,setAnswers,error,"checkmark-circle");
        }else if(option === "naolembro"){
            error = true;
            addcheck(arranswers,setBottombarclass,setAnswers,error,"close-circle");
        }else if(option === "quase"){
            addcheck(arranswers,setBottombarclass,setAnswers,error,"help-circle");
        }
    }
    return(
        <>
            <div className="mainscreen">
                <div className="toplogo">
                    <img src={logopequeno} alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                {deck.map((item,index)=>{return <Card key={index} index={index} item={item} addanswer={addanswer}/>})}
            </div>
            <div className={bottombarclass}>
                {answers}
            </div>
        </>
    );
}