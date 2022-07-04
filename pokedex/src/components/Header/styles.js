import styled from "styled-components"

export const Container = styled.header`
    background-image: url(${props => props.img});
    min-height: 100px;
    min-width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
` 
export const BoxButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;
    height: 30px;
    align-self: flex-end;
    background-color: transparent;
    margin-bottom: 13px;

    button {
        background-color: #171414;
        color: white;
        padding: 3%;
        width: 90px;
        height: 30px;
        border-radius: 50px;
        border: none;
        box-shadow: 2px 8px 1px #8b0000;

    }
    
    button:hover{
        cursor: pointer;
        box-shadow: 0px 1px 0px black;
        padding: 3%;
        height: 30px;
        width: 87px;
    }
` 