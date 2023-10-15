let meal = null;
let drink = null;
let dessert = null;

function selmeal(element){
    let unsel = document.querySelector(".mealoptions");
    unsel = unsel.querySelector(".selected");
    if(unsel!==null){
        unsel.classList.remove("selected");
        let ic = unsel.querySelector(".icon");
        ic.classList.add("hidden");
    }
    element.classList.add("selected");
    let icon = element.querySelector(".icon");
    icon.classList.remove("hidden");
    unclockorder();
}
function seldrink(element){
    let unsel = document.querySelector(".drinks");
    unsel = unsel.querySelector(".selected");
    if(unsel!==null){
        unsel.classList.remove("selected");
        let ic = unsel.querySelector(".icon");
        ic.classList.add("hidden");
    }
    element.classList.add("selected");
    let icon = element.querySelector(".icon");
    icon.classList.remove("hidden");
    unclockorder();
}
function seldessert(element){
    let unsel = document.querySelector(".desserts");
    unsel = unsel.querySelector(".selected");
    if(unsel!==null){
        unsel.classList.remove("selected");
        let ic = unsel.querySelector(".icon");
        ic.classList.add("hidden");
    }
    element.classList.add("selected");
    let icon = element.querySelector(".icon");
    icon.classList.remove("hidden");
    unclockorder();
}
function unclockorder(){
    meal = document.querySelector(".mealoptions");
    meal = meal.querySelector(".selected");
    drink = document.querySelector(".drinks");
    drink = drink.querySelector(".selected");
    dessert = document.querySelector(".desserts");
    dessert = dessert.querySelector(".selected");
    if(meal !== null && drink !== null && dessert !== null){
        let conf = document.querySelector(".confirmbutton");
        conf.classList.add("confirm");
        let selbutton = document.querySelector(".textbar");
        selbutton.innerHTML = "Fechar pedido";
    }
}
function order(){
    let element = document.querySelector(".confirm");
    if(element !== null){
        let unsel = document.querySelector(".confirmarea")
        unsel.classList.remove("hidden");
        completeorder();
    }
}
function completeorder(){
    let nmeal = meal.querySelector(".name");
    let pmeal = meal.querySelector(".price");
    let ndrink = drink.querySelector(".name");
    let pdrink = drink.querySelector(".price");
    let ndessert = dessert.querySelector(".name");
    let pdessert = dessert.querySelector(".price");
    let txtmeal = document.querySelector(".totalmeal");
    let prcmeal = txtmeal.querySelector(".prc");
    txtmeal = txtmeal.querySelector(".txt");
    let txtdrink = document.querySelector(".totaldrink");
    let prcdrink = txtdrink.querySelector(".prc");
    txtdrink = txtdrink.querySelector(".txt");
    let txtdessert = document.querySelector(".totaldessert");
    let prcdessert = txtdessert.querySelector(".prc");
    txtdessert = txtdessert.querySelector(".txt");
    txtmeal.innerHTML = nmeal.innerHTML;
    prcmeal.innerHTML = pmeal.innerHTML.slice(3,8);
    txtdrink.innerHTML = ndrink.innerHTML;
    prcdrink.innerHTML = pdrink.innerHTML.slice(3,8);
    txtdessert.innerHTML = ndessert.innerHTML;
    prcdessert.innerHTML = pdessert.innerHTML.slice(3,8);
    let total = (Number(prcmeal.innerHTML.replace(',','.')) + Number(prcdrink.innerHTML.replace(',','.')) + Number(prcdessert.innerHTML.replace(',','.'))).toFixed(2);
    let txttotal = document.querySelector(".total");
    txttotal = txttotal.querySelector(".prc");
    txttotal.innerHTML = total;
}
function cancelorder(){
    let element = document.querySelector(".confirmarea");
    element.classList.add("hidden");
}
function confirmorder(){
    let meal = document.querySelector(".totalmeal");
    meal = meal.querySelector(".txt").innerHTML;
    let drink = document.querySelector(".totaldrink");
    drink = drink.querySelector(".txt").innerHTML;
    let dessert = document.querySelector(".totaldessert");
    dessert = dessert.querySelector(".txt").innerHTML;
    let total = document.querySelector(".total");
    total = total.querySelector(".prc").innerHTML;
    let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${meal}
        - Bebida: ${drink}
        - Sobremesa: ${dessert}
        Total: R$ ${total.replace('.',',')}`)
    let link = "https://wa.me/5569984553060?text=";
    window.open(link+message);
}