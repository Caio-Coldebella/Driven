export default function Bottombar(){
    const listaicons = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];
    return(
        <div class="bottombar">
        {listaicons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}