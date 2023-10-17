import { usuarios, tweets, Tweet } from "../globals/index.js";

export function posttweets(req, res) {
    const { tweet, username } = req.body;
  
    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }
  
    const { avatar } = usuarios.find(user => user.username === username);
  
    tweets.push(new Tweet(username, tweet, avatar));
  
    res.status(201).send('OK, seu tweet foi criado');
  };

export function getusertweets(req, res) {
    const { username } = req.params;
  
    const tweetsDoUsuario = tweets.filter(t => t.username === username);
  
    res.status(200).send(tweetsDoUsuario);
  };

function reverseTweets() {
    return [...tweets].reverse();
  }

export function gettwwets(req, res) {
    const { page } = req.query;
  
    if (page && page < 1) {
      res.status(400).send('Informe uma página válida!');
      return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;
  
    if (tweets.length <= 10) {
      return res.send(reverseTweets());
    }
  
    res.status(200).send([...tweets].reverse().slice(start, end));
  };