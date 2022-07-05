import React, { useEffect, useState } from "react";
import { Container, DetailsContainer } from "../CardDetails/styles";
import axios from 'axios'


const CardDetails = () => {

//**************  só pra testar estilização ******************
    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/')
            .then((response)=>{
                setPoke(response.data)
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error.response)
            })
    }, [])

//************************************************************

    return (
        <Container>
            <h1>{poke.name}</h1>
            <span>
                <img src={poke.sprites.front_default} alt={poke.name + " front"}/>
                <img src={poke.sprites.back_default} alt={poke.name + " back"}/>
            </span>
            
            <DetailsContainer>
            <div>
                    <h3>Stats:</h3>
                    {poke && poke.stats.map((statistic, index) => {
                        return(
                            <li key={index}>{statistic.stat.name}: {statistic.base_stat}</li>     
                        )
                    })}
                </div>

                <div>
                    <h3>Type:</h3>
                    {poke && poke.types.map((poketype, index) => {
                        return <li key={index}>{poketype.type.name}</li>
                    })}
            
                    <h3>Moves:</h3>
                    {poke && poke.moves.map((movement, index)=>{
                            return (index<3 && <li key={index}>{movement.move.name}</li>)
                    })}
                </div>
            </DetailsContainer>
            
        </Container>
    )
}

export default CardDetails;