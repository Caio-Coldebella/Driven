import Topbar from "./components/topbarcomponents/Topbar";
import Content from "./components/contentcomponents/Content";
import Bottombar from "./components/bottombarcomponents/Bottombar";

export default function App(){
    return(
        <div>
            <Topbar/>
            <Content/>
            <Bottombar/>
        </div>
    );
}