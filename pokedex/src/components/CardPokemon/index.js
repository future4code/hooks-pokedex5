import axios from "axios";
import React, { useEffect,useState } from "react";
import {Container} from './styles';

const CardPokemon=(props)=>{

    useEffect(()=>requestPokemon,[])

    const [pokemon,setPokemon] = useState({
        name:'',
        photoLink:'',
        type:'',
    })

    const requestPokemon = async()=>{
        const res = await axios.get(props.link)
        const newPokemon = {
            name:res.data.name,
            photoLink:res.data.sprites.other.dream_world.front_default,
            type:res.data.types[0].type.name
        }
        setPokemon(newPokemon)
    }
    
    

    return (
    <Container color={pokemon.type}>
        <div>
            <img src={pokemon.photoLink} alt="Pokemon" />
        </div>  
        <div>
            <h2>{pokemon.name}</h2>
            <div>
                <button onClick={props.onClick}>{props.actionName}</button>
                <button onClick={props.onClickDetails}>Details</button>
            </div>
        </div>
    </Container>
    );
    }

export default CardPokemon;