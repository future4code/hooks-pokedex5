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
    flex-direction:column;
    align-items:center;
    gap:20px;
`

export const SearchArea = styled.div`
    width:80%;
    height:30px;
    display:flex;
    gap:30px;
    justify-content:center;
    align-items:center;

    input{
        width:50%;
        height:100%;
        border:none;
        border-radius:15px;
        outline:none;
        background-color:rgba(255,255,255,.3);
        padding: 0 20px;
        font-size:18px;

        &::placeholder{
            color:rgba(0,0,0,.4);
        }
    }

    select{
        height:100%;
        width: 50px;
        text-align:center;
        border:none;
        background-color:rgba(255,255,255,.3);
        border-radius:15px;
        outline:none;
    }

    @media(max-width:620px){
        width:100%;
    }
`;
