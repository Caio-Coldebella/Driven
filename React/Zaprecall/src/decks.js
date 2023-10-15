export default function decks(deck){
    let arr = [[
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
        {question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
        {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}            
    ],[
        {question: "Quem foi o primeiro campeão da copa do mundo?", answer: "O Uruguai em 1930"},
        {question: "Como ficou conhecida a partida em que o Brasil perdeu o titulo mundial de 1950?", answer: "Maracanaço"},
        {question: "Qual era o apelido da seleção holandesa de 1974?", answer: "Laranja mecânica"},
        {question: "Quantas copas do mundo foram disputadas até hoje?", answer: "21"},
        {question: "Qual a seleção com o maior número de vice-campeonatos?", answer: "Alemanha"},
        {question: "Quais seleções nunca foram eliminadas em qualificatórias para a copa?", answer: "Brasil e Alemanha"},
        {question: "Como ficou conhecido o gol de mão marcado por Maradona na copa de 1986?", answer: "La mano de Dios"},
        {question: "Quais seleções já campeãs nunca perderam uma final?", answer: "Uruguai, Inglaterra e Espanha"} 
    ]];
    arr.map(item => item.sort(()=>{return (Math.random() - 0.5)}));
    if(deck === "React"){
        return arr[0];
    }
    else if(deck === "Copa do Mundo"){
        return arr[1];
    }
    return arr[0];
    }