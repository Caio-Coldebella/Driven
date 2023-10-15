import logo from "../assets/logo.png";
import "./startscreen.css"
export default function StartScreen(props){
    return(
        <div className="startscreen">
            <img src={logo} alt="Logo Zap Recall"/>
            <h1>ZapRecall</h1>

            <input placeholder="Escolha seu deck" list="decks" name="decks" id="selectdeck"/>
                <datalist id="decks">
                    <option value="React"/>
                    <option value="Copa do Mundo"/>
                </datalist>
            
            <button onClick={()=>{props.changescreen(document.getElementById("selectdeck").value)}}>Iniciar Recall!</button>
        </div>
    );
}