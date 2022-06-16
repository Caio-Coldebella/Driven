let nofcards = 0;
while(nofcards < 4 || nofcards > 14 || nofcards%2 === 1){
    nofcards = prompt("Com quantas cartas deseja jogar?\n(Apenas números pares, entre 4 e 14)");
}