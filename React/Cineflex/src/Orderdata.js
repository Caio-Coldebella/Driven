const order={
    name: "",
    cpf: "",
    session: "",
    title: "",
    tickets: []
};
function setOrder(name,cpf,session,title,tickets){
    order.name = name;
    order.cpf = cpf;
    order.session = session;
    order.title = title;
    order.tickets = tickets;
}
export default function Orderdata(){
    const arr = [order,setOrder];
    return(
        arr
    );
}