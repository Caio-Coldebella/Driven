let cardsturned = 0;
let turnedcard = null;
let attempts = 0;
let seconds = 0;
let idInterval;
function reload(restart){
    if(restart == "sim"){
        attempts = 0;
        turnedcard = null;
        cardsturned = 0;
        console.log("reiniciando");
        main();
    }
    if(restart == "não"){
        alert("Obrigado por jogar :)");
        cardsturned = 2; //impede o usuario de clicar em qualquer carta
    }
}
function verifyendgame(){
    let element = document.querySelector(".front");
    if(element == null){
        clearInterval(idInterval);
        setTimeout(()=>{alert(`Você ganhou em ${attempts} jogadas e ${seconds} segundos!`);let restart = prompt("Gostaria de reiniciar a partida?\n(sim ou não)");reload(restart);},1000);
    }
}
function play(element){
    if(cardsturned === 1){
        cardsturned ++;
        if(turnedcard.classList.contains(element.classList[1])){
            turnedcard = null;
            cardsturned = 0;
            verifyendgame();
        }
        else{
            setTimeout(() => {cardsturned = 0; turn(turnedcard); turn(element); turnedcard = null;}, 1000);
        }
    }else{
        cardsturned ++;
        turnedcard = element;
    }
}
function turn(element){
    if(cardsturned > 1){
        return;
    }
    if(element.classList[2] == "back"){
        element.classList.remove("back");
        element.classList.add("front");
        //imagem alterada com um delay de 250ms para suavizar a transicao da carta (giro no eixo y)
        setTimeout(()=>{element.innerHTML = `<img src="./assets/front.png">`;},250);
        return;
    }
    switch (element.classList[1]){
        case "bobross":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/bobrossparrot.gif">`;},250);
            break;
        case "explody":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/explodyparrot.gif">`;},250);
            break;
        case "fiesta":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/fiestaparrot.gif">`;},250);
            break;
        case "metal":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/metalparrot.gif">`;},250);
            break;
        case "revertit":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/revertitparrot.gif">`;},250);
            break;
        case "triplets":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/tripletsparrot.gif">`;},250);
            break;
        case "unicorn":
            element.classList.remove("front");
            element.classList.add("back");
            setTimeout(()=>{element.innerHTML = `<img src="./assets/unicornparrot.gif">`;},250);
            break;
        default:
            break;
    }
    attempts ++;
    play(element);
}
function comparador() { 
	return Math.random() - 0.5; 
}
function createarray(nofcards){
    let content = document.querySelector(".content");
    content.innerHTML = "";
    let arr = [`<div class="card bobross front" onclick="turn(this)"><img src="./assets/front.png"></div>`,
`<div class="card explody front" onclick="turn(this)"><img src="./assets/front.png"></div>`,
`<div class="card fiesta front" onclick="turn(this)"><img src="./assets/front.png"></div>`,
`<div class="card metal front" onclick="turn(this)"><img src="./assets/front.png"></div>`,
`<div class="card revertit front" onclick="turn(this)"><img src="./assets/front.png"></div>`,
`<div class="card triplets front" onclick="turn(this)"><img src="./assets/front.png"></div>`,
`<div class="card unicorn front" onclick="turn(this)"><img src="./assets/front.png"></div>`];
    arr.sort(comparador);
    let arrcontent = [];
    for(let i=0; i<nofcards; i++){
        arrcontent.push(arr[i]);
        arrcontent.push(arr[i]);
    }
    arrcontent.sort(comparador);
    for(let i=0; i<arrcontent.length;i++){
        content.innerHTML += arrcontent[i];
    }
}
function clock(){
    seconds++;
    document.querySelector(".clock").innerHTML = seconds+"s";
}
function main(){
    seconds = -1;
    idInterval = setInterval(clock,1000);
    let nofcards = 0;
    while(nofcards < 4 || nofcards > 14 || nofcards%2 === 1){
        nofcards = prompt("Com quantas cartas deseja jogar?\n(Apenas números pares, entre 4 e 14)");
    }
    createarray(nofcards/2);
}
main();
