import {React, useState} from "react";
import PulseLoader from '@bit/davidhu2000.react-spinners.pulse-loader';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "./LoginCss";
import logo from "../assets/logo.png";

export default function Register(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [disable, setDisable] = useState(false);
    const [textbutton, setTextbutton] = useState("Cadastrar");
    function sendregister(event){
        event.preventDefault();
        setTextbutton(<PulseLoader color="#FFFFFF"/>);
        setDisable(true);
        const postobj = {
            email: email,
            name: name,
            image: photo,
            password: password};
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",postobj);
        promisse.then(res => {navigate("/")});
        promisse.catch(()=> {setDisable(false);setTextbutton("Cadastrar");alert("Nome de usuário ou Email em uso");});

    }
    return(
        <styles.LOGIN>
        <styles.IMAGE src={logo}/>
        <styles.FORM onSubmit={sendregister}>
            <styles.INPUT type="text" disabled={disable} required placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <styles.INPUT type="password" disabled={disable} required placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)}/>
            <styles.INPUT type="text" disabled={disable} required placeholder="nome" value={name} onChange={e=> setName(e.target.value)}/>
            <styles.INPUT type="text" disabled={disable} required placeholder="foto" value={photo} onChange={e=> setPhoto(e.target.value)}/>
            <styles.BUTTON type="submit" disabled={disable}>{textbutton}</styles.BUTTON>
        </styles.FORM>
        <Link to="/"><styles.LINK>Já tem uma conta? Faça login!</styles.LINK></Link>
        </styles.LOGIN>
    );
}