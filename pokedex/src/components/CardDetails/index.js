import React, { useContext } from "react";
import { Container, PokeType, TypeContainer, StatName, StatsContainer, Number, MovesName } from "../CardDetails/styles";
import { pokemonListUrl } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";
import useRequestData from "../../hooks/useRequestData";


const CardDetails = () => {

    const {idPoke} = useContext(GlobalContext)
    const [data] = useRequestData(`${pokemonListUrl}/${idPoke}`)
    const typecolor = []


    return (
        <Container color={typecolor}>
            <div>
                <h1>{data && data.name}</h1>
                
                <img src={data && data.sprites && data.sprites.front_default} alt={data && data.name + " front"}/>

                <img src={data && data.sprites && data.sprites.back_default} alt={data && data.name + " back"}/>
                
                <TypeContainer>
                    {data && data.types && data.types.map((poketype, index) => {     
                        typecolor.push(poketype.type.name)                  
                        return <PokeType color={poketype.type.name} key={index}>{poketype.type.name}</PokeType>
                    })}
                </TypeContainer>
            </div>

            <div>
                <br/>

                <h4>STATS:</h4>

                {data && data.stats && data.stats.map((statistic, index) => {
                    return(
                        <StatsContainer key={index}>
                            <StatName>{statistic.stat.name}:</StatName> 
                            <Number>{statistic.base_stat}</Number>
                        </StatsContainer>     
                    )
                })}
            </div> 

            <br/>

            <div>
                <h4>MOVES:</h4>

                {data && data.moves && data.moves.map((movement, index)=>{
                    return (index<3 && <MovesName color={typecolor} key={index}>{movement.move.name}</MovesName>)
                })}
            </div>
            
        </Container>
    )
}

export default CardDetails;