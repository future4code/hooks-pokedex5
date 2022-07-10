import axios from "axios";
import React, { useEffect,useState } from "react";
import {Container} from './styles';
import unknown from '../../assets/img/unknown.png'

const CardPokemon=(props)=>{

    useEffect(()=>{requestPokemon()},[])

    const [pokemon,setPokemon] = useState({})

    const requestPokemon = async()=>{
        const res = await axios.get(props.link)
        const newPokemon = {
            name:res.data.name,
            photoLink:res.data.sprites.other.dream_world.front_default || unknown ,
            type:res.data.types[0].type.name
        }
        setPokemon(newPokemon)
    }
    
    return (
    <Container color={pokemon.type && pokemon.type}>
        <div>
            <img src={pokemon.photoLink && pokemon.photoLink} alt="Pokemon" />
        </div>  
        <div>
            <h2>{pokemon.name && pokemon.name}</h2>
            <div>
                <button onClick={props.onClick}>{props.actionName}</button>
                <button onClick={props.onClickDetails}>Details</button>
            </div>
        </div>
    </Container>
    );
    }

export default CardPokemon;