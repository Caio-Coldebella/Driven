let user = "";
function showmessages(messages){
    let msg = "";
    let element = document.querySelector(".content");
    element.innerHTML = "";
    for(let i = 0; i < messages.data.length; i++){
        let message = messages.data[i];
        if(message.type === "message"){
            msg = `<div class="generalmessage message">
            <p><span class="time">${message.time} </span><em>${message.from} </em>para <em>${message.to}: </em>${message.text}</p>
            </div>`;
        }else if(message.type === "status"){
            msg = `<div class="generalmessage status">
            <p><span class="time">${message.time} </span><em>${message.from} </em>${message.text}</p>
            </div>`;
        }else if(message.type === "private_message"){
            msg = `<div class="generalmessage private_message">
            <p><span class="time">${message.time} </span><em>${message.from} </em>reservadamente para <em>${message.to}: </em>${message.text}</p>
            </div>`;
        }
        element.innerHTML += msg;
    }
}

let  errormessages = (error) => {login("Digite seu lindo nome");}

function reloadmessages(){
 let messages = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
 messages.then(showmessages);
 messages.catch(errormessages);
}
function sucessfullconnection(sucess){
    let statuscode = sucess.status;
    setInterval(()=>{axios.post("https://mock-api.driven.com.br/api/v6/uol/status", {name: user})},5000);
    reloadmessages();
}
function failedconnection(fail){
    let statuscode = fail.response.status;
    login(`Erro ${statuscode}: Já existe um usuário cadastrado com esse nome`);
}
function createConexion(user){
    let promess = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{name: user});
    promess.then(sucessfullconnection);
    promess.catch(failedconnection);
}
function login(str){
    user = prompt(str);
    createConexion(user);
}
login("Digite seu lindo nome");