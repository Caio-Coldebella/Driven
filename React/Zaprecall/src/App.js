import React from "react";
import StartScreen from "./startscreen/StartScreen";
import Mainscreen from "./mainscreen/Mainscreen";
import "./css/reset.css";
import "./css/style.css"

export default function App(){
    const fstscreen = <StartScreen changescreen={changescreen}/>;
    const [screen, setScreen] = React.useState(fstscreen);
    function changescreen(deck){
        if(screen === fstscreen){
            setScreen(<Mainscreen seldeck={deck}/>);
        }
    }
    return(
        <>
            {screen}
        </>
    );
}