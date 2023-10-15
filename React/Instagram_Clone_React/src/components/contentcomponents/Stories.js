import Story from "./Story";

export default function Stories(props){
   return(
    <div className="stories">
        <ion-icon name={props.icon}></ion-icon>
        {(props.media).map(doc => <Story background="./assets/stories_background.jpg" imgurl={doc.imgurl} name={doc.name}/>)}
    </div>
    );
}