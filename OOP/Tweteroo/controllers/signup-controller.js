import { Usuario, usuarios } from "../globals/index.js";

export function signupcontrolller(req, res) {
    const { username, avatar } = req.body;
  
    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }
    
    usuarios.push(new Usuario(username, avatar));
  
    res.status(200).send('OK deu tudo certo');
  };