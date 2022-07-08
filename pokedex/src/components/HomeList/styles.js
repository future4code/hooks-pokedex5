import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5%;
    width:90vw;
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;

    @media (max-width:620px){
        width:100vw;
    }
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
