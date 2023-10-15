export default function Sidebarbox(props){
    return(
        <div class="sidebarboxes">
            <img src={props.url}/>
            <div>
                <p>{props.text}</p>
                <p>Segue você</p>
            </div>
            <p>Seguir</p>
        </div>
    );
}