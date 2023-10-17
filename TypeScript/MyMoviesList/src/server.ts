import express from "express";
import router from "../routers/index.js";

const server = express();
server.use(express.json())
server.use(router);

server.listen(4000, ()=>{
    console.log("Executando na porta 4000")
});