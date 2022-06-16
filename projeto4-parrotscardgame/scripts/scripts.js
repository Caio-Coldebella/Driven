function turn(element){
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
}

function createarray(n){
    let arr = document.querySelector(".content");
    arr.innerHTML = "";
    for(let i=0; i<n; i++){
    arr.innerHTML += `<div class="card"><img src="./assets/front.png"></div>`;
    }
    console.log(arr);
}



function main(){
    let nofcards = 0;
    while(nofcards < 4 || nofcards > 14 || nofcards%2 === 1){
        nofcards = prompt("Com quantas cartas deseja jogar?\n(Apenas números pares, entre 4 e 14)");
    }
    //createarray(nofcards);
}
//main();