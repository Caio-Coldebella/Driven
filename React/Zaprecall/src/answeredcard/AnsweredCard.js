import "./answeredcard.css";

export default function AnsweredCard(props){
    let icon = null;
    let pcontent = null;
    if(props.type === "naolembro"){
        pcontent = <p className="naolembrop">Questao {props.num +1}</p>;
        icon = <ion-icon name="close-circle"></ion-icon>;
    }else if(props.type === "quase"){
        pcontent = <p className="quasep">Questao {props.num +1}</p>;
        icon = <ion-icon name="help-circle"></ion-icon>;
    }else if(props.type === "zap"){
        pcontent = <p className="zapp">Questao {props.num +1}</p>;
        icon = <ion-icon name="checkmark-circle"></ion-icon>;
    }
    return(
        <div className="boxquestion" key={props.num}>
            {pcontent}
            {icon}
        </div>
    );
}