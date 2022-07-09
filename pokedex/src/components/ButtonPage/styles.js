import styled from 'styled-components';

export const Container = styled.button`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:rgba(255,255,255,.3);
    display:flex;
    justify-content:center;
    align-items:center;
    flex:none;
    color:black;
    cursor:pointer;
    border:none;

    &:hover{
        background-color:rgba(255,0,0,.6);
    }
    &:focus{
        background-color:red;
        color:white;
    }
`;