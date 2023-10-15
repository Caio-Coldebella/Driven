let user = "";
let listofusers = [];
let visibility = "message";
let receivers = "Todos";
function selectreceiver(element){
    let listofelements = document.querySelectorAll(".contacts .checkmark");
    for(let i = 0; i< listofelements.length; i++){
        listofelements[i].classList.add("hidden");
    }
    element.querySelector(".hidden").classList.remove("hidden");
    receivers = element.querySelector(".txtparticipant").innerHTML;
}
function selectvisibility(element){
    let listofvisb = document.querySelectorAll(".visibilities .checkmark");
    for(let i = 0; i< listofvisb.length; i++){
        listofvisb[i].classList.add("hidden");
    }
    element.querySelector(".hidden").classList.remove("hidden");
    let txt = element.querySelector(".txtvisibility").innerHTML;
    if(txt === "Público"){
        visibility = "message";
    }else if(txt === "Reservadamente"){
        visibility = "private_message";
    }
}
function closesidebar(){
    document.querySelector(".blackbackground").classList.add("hidden");
    document.querySelector(".sidebar").classList.add("hidden");
}
function opensidebar(){
    document.querySelector(".blackbackground").classList.remove("hidden");
    document.querySelector(".sidebar").classList.remove("hidden");
}

function addparticipants(participants){
    listofusers = participants.data;
    let list = document.querySelector(".contacts");
    list.innerHTML = `<div onclick="selectreceiver(this)">
    <div>
        <ion-icon name="people"></ion-icon>
        <p class=txtparticipant>Todos</p>
    </div>
    <ion-icon name="checkmark" class="checkmark hidden"></ion-icon>
</div>`;
    for(let i=0; i<listofusers.length; i++){
        let element = `<div data-identifier="participant" onclick="selectreceiver(this)">
        <div>
            <ion-icon name="person-circle"></ion-icon>
            <p class="txtparticipant">${listofusers[i].name}</p>
        </div>
        <ion-icon name="checkmark" class="checkmark hidden"></ion-icon>
    </div>`;
        list.innerHTML += element;
    }

}
function getparticipants(){
    let promisse = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
    promisse.then(addparticipants);
    promisse.catch((error)=>console.log(error.response.status));
}
let sendsucess = (sucess) => {
    reloadmessages();}
function sendfail(error){
    console.log(error.response.status)
    window.location.reload();}
function sendmessage(){
    let message = document.querySelector(".bottombar input");
    let object = {
        from: user,
        to: receivers,
        text: message.value,
        type: visibility
    }
    message.value = "";
    let promisse = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",object);
    promisse.then(sendsucess);
    promisse.catch(sendfail);
}


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
            if(message.to !== user && message.from !== user && message.to !== "Todos"){
                continue;
            }
            msg = `<div class="generalmessage private_message">
            <p><span class="time">${message.time} </span><em>${message.from} </em>reservadamente para <em>${message.to}: </em>${message.text}</p>
            </div>`;
        }
        element.innerHTML += msg;
    }
    let lastelement = document.querySelectorAll(".generalmessage");
    lastelement = lastelement[lastelement.length -1];
    lastelement.scrollIntoView();
}
let  errormessages = (error) => {
    console.log(error.response.status)
    window.location.reload();}
function reloadmessages(){
 let messages = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
 messages.then(showmessages);
 messages.catch(errormessages);
}


function sucessfullconnection(sucess){
    let statuscode = sucess.status;
    setInterval(()=>{axios.post("https://mock-api.driven.com.br/api/v6/uol/status", {name: user})},5000);
    setInterval(()=>{reloadmessages();},3000);
    setInterval(()=>{getparticipants();},10000);
    reloadmessages();
    getparticipants();
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