export default function Story(props){
    return(
        <div>
            <img className="backgrnd" src={props.background}/>
            <img className= "iconstorie" src={props.imgurl}/>
            <p className="fontstories">{props.name}</p>
        </div>
    );
}