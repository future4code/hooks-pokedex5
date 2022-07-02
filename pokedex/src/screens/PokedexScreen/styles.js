import styled from 'styled-components'

export const Container = styled.div`
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerPoke = styled.div`
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
`

export const Glass = styled.div`
    min-height: 80vh;
    margin-top: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

`