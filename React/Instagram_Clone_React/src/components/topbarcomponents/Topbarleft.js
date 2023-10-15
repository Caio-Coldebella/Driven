export default function Topbarleft(props){
    return(
    <div className="topbarleft">
        <ion-icon name={props.icon1}></ion-icon>
        <img src={props.imagesrc}/>
        <ion-icon name={props.icon2}></ion-icon>
    </div>
    );
}