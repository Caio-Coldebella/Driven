let cardsturned = 0;
let turnedcard = null;
function play(element){
    if(cardsturned === 1){
        cardsturned ++;
        if(turnedcard.classList.contains(element.classList[1])){
            turnedcard = null;
            cardsturned = 0;
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
        element.innerHTML = `<img src="./assets/front.png">`;
        return;
    }
    switch (element.classList[1]){
        case "bobross":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/bobrossparrot.gif">`;
            break;
        case "explody":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/explodyparrot.gif">`;
            break;
        case "fiesta":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/fiestaparrot.gif">`;
            break;
        case "metal":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/metalparrot.gif">`;
            break;
        case "revertit":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/revertitparrot.gif">`;
            break;
        case "triplets":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/tripletsparrot.gif">`;
            break;
        case "unicorn":
            element.classList.remove("front");
            element.classList.add("back");
            element.innerHTML = `<img src="./assets/unicornparrot.gif">`;
            break;
        default:
            break;
    }
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
function main(){
    let nofcards = 0;
    while(nofcards < 4 || nofcards > 14 || nofcards%2 === 1){
        nofcards = prompt("Com quantas cartas deseja jogar?\n(Apenas números pares, entre 4 e 14)");
    }
    createarray(nofcards/2);
}
main();