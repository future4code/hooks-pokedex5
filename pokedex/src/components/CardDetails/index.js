import React, { useContext, useEffect } from "react";
import { Container, DetailsContainer } from "../CardDetails/styles";
import axios from 'axios'
import { pokemonListUrl } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";
import useRequestData from "../../hooks/useRequestData";


const CardDetails = () => {

    const {idPoke} = useContext(GlobalContext)
    const [data] = useRequestData(`${pokemonListUrl}/${idPoke}`)


    return (
        <Container>
        
            <div>
                <h1>{data && data.name}</h1>
                
                <img src={data && data.sprites && data.sprites.front_default} alt={data && data.name + " front"}/>

                <img src={data && data.sprites && data.sprites.back_default} alt={data && data.name + " back"}/>
            </div>

            <DetailsContainer>
                <div>
                    <h3>Stats:</h3>

                    {data && data.stats && data.stats.map((statistic, index) => {
                        return(
                            <p key={index}>{statistic.stat.name}: {statistic.base_stat}</p>     
                        )
                    })}
                </div>

                <div>
                    <h3>Type:</h3>

                    {data && data.types && data.types.map((poketype, index) => {
                        return <p key={index}>{poketype.type.name}</p>
                    })}

                    <br/>

                    <h3>Moves:</h3>

                    {data && data.moves && data.moves.map((movement, index)=>{
                            return (index<3 && <p key={index}>{movement.move.name}</p>)
                    })}
                </div>
            </DetailsContainer>
        </Container>
    )
}

export default CardDetails;