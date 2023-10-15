import Boxtop from "./Boxtop";
import Boxbottom from "./Boxbottom";
import React from "react";

function liked(like,setLike,props){
    const set = props.noflikes[1];
    const nlikes = props.noflikes[0];
    if(like === "heart-outline"){
        setLike("heart");
        set(nlikes + 1);
    }else{
        setLike("heart-outline");
        set(nlikes - 1);
    }
}
export default function Box(props){
    const [like, setLike] = React.useState("heart-outline");
    let properties = props.properties;
    return (
        <div className="box">
            <Boxtop img={properties.imgtop} title={properties.title} icon={properties.topicon}/>
            <img src={properties.img} onClick={()=> liked(like,setLike,properties)}/>
            <Boxbottom leftlogos={properties.leftlogos} rigthlogo={properties.rigthlogo} img={properties.bottomimg} 
            text={properties.bottomtext} like={like} setLike={setLike} func={liked}/>
        </div>
    );
}