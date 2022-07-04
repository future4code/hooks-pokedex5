import styled from 'styled-components';

export const Container = styled.div`
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