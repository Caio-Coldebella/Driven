export default function Topbarrigth(props){
    const icons = props.listoficons;
    const domicons = icons.map(icon => {return <ion-icon name={icon}></ion-icon>});
    return (
        <div className="topbarright">
            {domicons}
        </div>
    );
}