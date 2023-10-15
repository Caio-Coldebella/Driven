import Box from "./box/Box"
import React from "react";
export default function Posts(){
    const arraynoflikes1 = React.useState(101523);
    const arraynoflikes2 = React.useState(99159);
    let iconslist = ["chatbubble-outline", "paper-plane-outline"];
    
    let propsimg1 = {imgtop: "./assets/meowed 1.png", title: "meowed", topicon: "ellipsis-horizontal",
    img: "./assets/gato-telefone.png", leftlogos: iconslist, rigthlogo: "bookmark-outline",
    bottomimg:"./assets/respondeai 1.png",noflikes: arraynoflikes1, bottomtext: <p>Curtido por <em>respondeai</em> e <em>outras {arraynoflikes1[0]} pessoas</em></p> };
    
    let propsimg2 = {imgtop: "./assets/barked 1.png", title: "barked", topicon: "ellipsis-horizontal",
    img: "./assets/dog 1.png" ,leftlogos: iconslist, rigthlogo: "bookmark-outline",
    bottomimg:"./assets/adorableanimals 1.png", noflikes: arraynoflikes2, bottomtext: <p>Curtido por <em>adorable_animals</em> e <em>outras {arraynoflikes2[0]} pessoas</em></p> };
    let arr = [propsimg1,propsimg2,propsimg1,propsimg2];
    let render = arr.map(item => <Box properties={item}/>);
    return(
    <div className="posts">
        {render}
    </div>
    );
}