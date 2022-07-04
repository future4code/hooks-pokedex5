import styled from 'styled-components';

export const Container = styled.div`
    height: 85vh;
    width: 85vw;
    border-radius: 15px;
    //background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background: url(https://wallpaperaccess.com/full/5818315.png);
    background-repeat: no-repeat;
    //transform: rotate(90deg);
  
    
    
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1px;
    align-items: center;
    width: 100%;
    text-align: center;
`