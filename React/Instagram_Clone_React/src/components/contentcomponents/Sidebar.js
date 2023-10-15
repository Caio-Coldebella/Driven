import Sidebarboxes from "./Sidebarboxes";

export default function Sidebar(props){
    let suggestions = [{url:"./assets/badvibesmemes 1.png", text: "bad.vibe.memes"}
,{url:"./assets/chibirdart 1.png", text: "chibirdart"},{url:"./assets/razoesparaacreditar 1.png", text: "razoesparaacreditar"},
{url:"./assets/adorableanimals 1.png", text: "adorable_animals"},{url:"./assets/smallcutecats 1.png", text: "smallcutecats"}];
    return(
        <div className="sidebar">
                <div>
                    <div className="sidebartopbox">
                        <img src={props.url}/>
                        <p><em>{props.name1}</em><br/>{props.name2}</p> 
                    </div>
                    <div className="sugestions">
                        <p>Sugestôes para você</p>
                        <p><em>Ver tudo</em></p>
                    </div>
                    {suggestions.map(item => {return (<Sidebarboxes url={item.url} text={item.text} />)})}
                    <div className="sidebarbottombox">
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •<br/>
                            Termos • Localizações •Contas mais relevantes •Hashtags •<br/>
                            Idioma</p>
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>
    );
}