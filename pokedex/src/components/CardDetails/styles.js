import styled from 'styled-components';
import PokeImg from "../../assets/img/background-detailcard.png"

export const Container = styled.div`
    height: 85vh;
    width: 85vw;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${PokeImg});
    background-repeat: no-repeat;
    background-size: contain;
    color: black;
    
    
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1px;
    align-items: center;
    width: 70%;
`