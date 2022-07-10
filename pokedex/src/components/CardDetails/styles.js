import styled from 'styled-components';

export const Container = styled.div`
    height: fit-content;
    width: fit-content;
    border-radius: 15px;
    padding: 1% 2%;
    backdrop-filter: blur(15px);
    --webkit-backdrop-filter: blur(15px);
    background-color: rgba(225,225, 255, .1);
    color: black;
    text-align: center;
    margin: 10px;
    border: 5px solid black;
`;

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`

export const PokeType = styled.p`
    border-radius: 5px;
    margin: 0 1px;
    padding: 2px 4px;
    background-color:${(props)=>`var(--${props.color})`};
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    align-self: center;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 6px;
    background-color: lightgreen;
    align-items: center;
    margin: 1px 0px;
`

export const StatName = styled.p`
    text-transform: uppercase;
    background-color: red;
    border-radius: 5px;
    padding: 1.5% 3%;
    font-size: 13px;
    font-weight: bolder;
    text-align: center;
    color: black;
`

export const Number = styled.p`
    color: green;
    font-weight: bolder;
    padding: 1px;
`

export const MovesName = styled.p`
    margin: 1px 0;
    width: max-content;
    border-radius: 5px;
    background-color: ${(props)=>`var(--${props.color})`};
    padding: 1% 3%;
    color: black;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bolder;
`