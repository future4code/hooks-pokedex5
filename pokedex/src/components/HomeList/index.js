import React, { useEffect, useState,useContext } from "react";
import CardPokemon from "../CardPokemon";
import { pokemonListUrl } from "../../constants/index.js";
import {Container} from './styles';
import axios from 'axios';
import GlobalContext from "../../contexts/GlobalContext";



const HomeList=()=>{

  const {pokedex,setPokedex} = useContext(GlobalContext);

  const [quantity,setQuantity] = useState('20')
  const [offset,setOffset] = useState('0')
  const url = `${pokemonListUrl}/?limit=${quantity}&offset=${offset}`
  const [list,setList] = useState([])

  useEffect(()=>requestData,[])

  const requestData =async () =>{
    const res = await axios.get(url)
    setList(res.data.results)
  }
  const renderList = list && list.map((item)=>{
  
      return <CardPokemon 
      link={item.url} 
      key={item.url} 
      actionName="I Choose U!" 
      onClick={()=>addToPokedex(item.url)}/>
   
  })

  const addToPokedex = (url)=>{
    setPokedex([...pokedex,url])
  }

  return (
   <Container>
    {renderList}
   </Container>
  );
}

export default HomeList;