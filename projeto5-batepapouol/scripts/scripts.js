function sucessfullconnection(sucess){
    let statuscode = sucess.status;
    console.log(statuscode)
}
function failedconnection(fail){
    let statuscode = fail.response.status;
    console.log(statuscode)
}
function createConexion(user){
    let promess = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{name: user});
    promess.then(sucessfullconnection);
    promess.catch(failedconnection);
}

let user = prompt("Digite seu nome");
createConexion(user);