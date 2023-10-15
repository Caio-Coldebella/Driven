import styled from "styled-components";

const LOGIN = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
`;
const IMAGE = styled.img`
    width: 180px;
    height: 180px;
    margin: 70px 0 33px 0;
`;
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    margin-bottom: 25px;
`;
const INPUT = styled.input`
    height: 45px;
    width: 300px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding-left: 10px;
    color: #D4D4D4;
    font-size: 20px;
`;
const BUTTON = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 300px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    &:hover{
        cursor: pointer;
    }
`;
const LINK = styled.p`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
    &:hover{
        cursor: pointer;
    }
`;

const styles = {
    LOGIN: LOGIN,
    IMAGE: IMAGE,
    FORM: FORM,
    INPUT: INPUT,
    BUTTON: BUTTON,
    LINK: LINK
}
export default styles;