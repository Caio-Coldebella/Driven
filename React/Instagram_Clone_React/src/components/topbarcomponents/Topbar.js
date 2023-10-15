import Topbarleft from "./Topbarleft";
import Topbarright from "./Topbarright";

export default function Topbar(){
    let listoficons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return(
        <div className="topbar">
            <div>
                <Topbarleft icon1="logo-instagram" icon2="paper-plane-outline" imagesrc="./assets/logo.png"/>
                <input type="text" id="search" name="name" placeholder="Pesquisar"/>
                <Topbarright listoficons={listoficons} />
            </div>
        </div>
    );
}