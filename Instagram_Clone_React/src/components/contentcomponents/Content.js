import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function Content(){
    let media = [{imgurl:"./assets/9gag 1.png", name:"9gag"},{imgurl:"./assets/meowed 1.png", name:"meowed"},
    {imgurl:"./assets/barked 1.png", name:"barked"},{imgurl:"./assets/nathanwpylestrangeplanet 1.png", name:"nathanwpyle..."},
    {imgurl:"./assets/wawawiwacomicsa 1.png", name:"wawawiwac..."},{imgurl:"./assets/respondeai 1.png", name:"respondeai"},
    {imgurl:"./assets/filomoderna 1.png", name:"filomoderna"},{imgurl:"./assets/memeriagourmet 1.png", name:"memeria"}];    
    return(
        <div className="content">
            <div className="maincontent">
                <Stories icon="chevron-forward-circle" media={media}/>
                <Posts/>
            </div>
            <Sidebar url="./assets/catanacomics 1.png" name1="catanacomics" name2="Catana" />
        </div>
        );
    }