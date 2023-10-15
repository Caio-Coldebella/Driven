import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "./contexts/UserContext";
import TasksContext from "./contexts/TasksContext";
import NewhabitContext from "./contexts/NewhabitContext";
import Login from "./modules/Login";
import Register from "./modules/Register";
import Habits from "./modules/Habits";
import Today from "./modules/Today";
import Historic from "./modules/Historic";
import "./css/reset.css";
import "./css/style.css";

export default function App(){
    const [user, setUser] = useState("");
    const [previous, setPrevious] = useState({name: null, days: null});
    const [progress,setProgress] = useState(0);
    return(
        <TasksContext.Provider value={{progress,setProgress}}>
        <NewhabitContext.Provider value={{previous,setPrevious}}>
        <UserContext.Provider value={{user,setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Register/>}/>
                <Route path="/habitos" element={<Habits/>}/>
                <Route path="/hoje" element={<Today/>}/>
                <Route path="/historico" element={<Historic/>}/>
            </Routes>
        </BrowserRouter>        
        </UserContext.Provider>
        </NewhabitContext.Provider>
        </TasksContext.Provider>
    );
}