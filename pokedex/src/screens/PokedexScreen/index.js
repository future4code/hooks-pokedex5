import React, { useContext } from "react";
import { Container } from './styles'
import CardPokemon from '../../components/CardPokemon/index'
import GlobalContext from "../../contexts/GlobalContext";
import Header from "../../components/Header/index"




const PokedexScreen = () => {
  const {pokedex, setPokedex} = useContext(GlobalContext)
  
  const removePokemon = (url) => {

    const newPokedexList = pokedex && pokedex.filter((pokeUrl) => {
      return  pokeUrl !== url
    })

    setPokedex(newPokedexList)
  }


  const renderPokemons = pokedex && pokedex.map((url) => {
    return (
      <CardPokemon
      key={url}  
      link={url} 
      actionName="Remove"
      onClick={()=>{removePokemon(url)}}
     />
    )
    
  })
  return (
    <Container>
      <Header/>
      {renderPokemons}
    </Container>
  );
}

export default PokedexScreen;