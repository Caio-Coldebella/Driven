export default function Boxtop(props){
    return(
        <div className="box-top">
            <div>
                <img src={props.img}/>
                <p>{props.title}</p>
            </div>
            <ion-icon name={props.icon}></ion-icon>
        </div>
    );
}