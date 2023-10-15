import styled from "styled-components";

export default function PageBottom(props){
    return(
        <CONTENT>
            <IMAGECONTAINER><IMAGE src={props.image}/></IMAGECONTAINER>
            <WORDS>
                {props.children}
            </WORDS>
        </CONTENT>
    );
}
const CONTENT = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 117px;
    width: 100vw;
    background-color: #DFE6ED;
`;
const IMAGE = styled.img`
    width: 48px;
    height: 72px;
`;
const IMAGECONTAINER = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 14px auto 10px;
    width: 64px;
    height: 88px;
    background-color: #FFFFFF;
`;
const WORDS = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 0;
    font-size: 26px;
`;