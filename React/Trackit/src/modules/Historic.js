import styled from "styled-components";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
export default function Historic(){
    return(
        <>
        <Topbar/>
        <CONTENT>
            <TITLE>
                Histórico
            </TITLE>
            <TXT>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </TXT>
        </CONTENT>
        <Bottombar/>
        </>
    );
}
const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding: 0 18px 0 18px;
    margin: 70px 0 70px 0;
`;
const TITLE = styled.p`
    font-size: 23px;
    color: #126BA5;
    margin: 30px 0 20px 0;
`;
const TXT = styled.p`
    font-size: 18px;
    color: #666666;
`;