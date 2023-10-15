import { BrowserRouter, Routes, Route} from "react-router-dom";
import SelectMovie from "./SelectMovie";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Sucess from "./Sucess";
import "./css/reset.css";
import "./css/style.css";

export default function App(){
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SelectMovie/>} />
            <Route path="/sessoes/:idFilme" element={<Sessions/>}/>
            <Route path="/assentos/:idSessao" element={<Seats/>}/>
            <Route path="/sucesso" element={<Sucess/>}/>
        </Routes>
    </BrowserRouter>
    </>
    );
}