import PulseLoader from '@bit/davidhu2000.react-spinners.pulse-loader';
import logo from "../assets/logo.png"
import {React ,useState, useContext} from "react";
import UserContext from "../contexts/UserContext";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "./LoginCss";

export default function Login(){
    const setUser = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [textbutton, setTextbutton] = useState("Entrar");
    function sendlogin(event){
        event.preventDefault();
        setTextbutton(<PulseLoader color="#FFFFFF"/>);
        setDisable(true);
        const objpost = {
            email: email,
            password: password
        };
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",objpost);
        promisse.then(res => {setUser.setUser(res.data); navigate("/hoje")})
        promisse.catch(()=> {setDisable(false);setTextbutton("Entrar");alert("Nome de usuário e/ou senha incorreto");});
    }
    return(
        <styles.LOGIN>
        <styles.IMAGE src={logo}/>
        <styles.FORM onSubmit={sendlogin}>
            <styles.INPUT disabled={disable} type="text" required placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <styles.INPUT disabled={disable} type="password" required placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)}/>
            <styles.BUTTON disabled={disable} type="submit">{textbutton}</styles.BUTTON>
        </styles.FORM>
        <Link to="/cadastro"><styles.LINK>Não tem uma conta? Cadastre-se!</styles.LINK></Link>
        </styles.LOGIN>
    );
}