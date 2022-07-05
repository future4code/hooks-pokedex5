import React, { useEffect, useState,useContext } from "react";
import CardPokemon from "../CardPokemon";
import { pokemonListUrl } from "../../constants/index.js";
import {Container} from './styles';
import axios from 'axios';
import GlobalContext from "../../contexts/GlobalContext";
import { goToDetails } from "../../coordinator/coordinator";
import { useNavigate } from "react-router-dom";



const HomeList=()=>{

  const {pokedex,setPokedex,list,setList, setIdPoke} = useContext(GlobalContext);

  const [quantity,setQuantity] = useState('20')
  const [offset,setOffset] = useState('0')
  const url = `${pokemonListUrl}/?limit=${quantity}&offset=${offset}`
 
  const navigate = useNavigate()

  useEffect(()=>requestData,[])

  const requestData =async () =>{
    const res = await axios.get(url)
    const listRequest = res.data.results;
    const newList = listRequest.filter((item)=>{
      const find = pokedex.find((url)=>{
        if(item.url === url){
          return true
        }}
      )
      if(!find){
        return item
      }
  })
  setList(newList)
}
  const renderList = list && list.map((item)=>{
    
      return <CardPokemon 
      link={item.url} 
      key={item.url} 
      actionName="I Choose u!" 
      onClick={()=>addToPokedex(item.url)}
      onClickDetails={()=>detailsButton(item.name)}
      />
   
  })

  const addToPokedex = (id)=>{
    setPokedex([...pokedex,id])
    const newList = list.filter((item)=>{
      if(item.url !== id){
        return item
      }
    }
   )
   setList(newList)
  }

  const detailsButton = (id) => {
    goToDetails(navigate, id)
    setIdPoke(id)
  }

  return (
   <Container>
    {renderList}
   </Container>
  );
}

export default HomeList;