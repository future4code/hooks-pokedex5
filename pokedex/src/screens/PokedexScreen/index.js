import React, { useContext } from "react";
import { Container, ContainerPoke, Glass } from './styles'
import CardPokemon from '../../components/CardPokemon/index'
import GlobalContext from "../../contexts/GlobalContext";
import Header from "../../components/Header/index"
import Warning from "../../components/Warning";
import { goToDetails } from "../../coordinator/coordinator";
import { useNavigate } from "react-router-dom";





const PokedexScreen = () => {
  const { pokedex, setPokedex, setIdPoke } = useContext(GlobalContext)
  const navigate = useNavigate()


// Atualiza o estado pkedex retonando um array sem a url (recebida por parametro) do pokemon removido  
  const removePokemon = (url) => {
    const newPokedexList = pokedex && pokedex.filter((pokeUrl) => { // filtra a lista 
      return pokeUrl !== url //Retorna o novo array 
    })

    setPokedex(newPokedexList) // Atuliza o estado pokedex com o nova array filtrado
  }

// Avisa que a pokedex está vazia
  const warning = () => {
    if (pokedex.length === 0) { //verifica se o estado pokedex está vazio
      return <Warning />
    }
  }

//Renderiza pokemons armazenados na pokedex 
  const renderPokemons = pokedex && pokedex.map((url) => {
    return (
      <CardPokemon
        key={url}
        link={url}
        actionName="Remove"
        onClick={() => { removePokemon(url) }}
        onClickDetails={() => detailsButton(url.slice(34,35))}
      />
    )})

  const detailsButton = (id) => {
    goToDetails(navigate, id)
    setIdPoke(id)
  }

  return (
    <Container>
      <Header />
        <Glass>
      <ContainerPoke>
          {warning()}
          {renderPokemons}
      </ContainerPoke>
        </Glass>
    </Container>
  );
}

export default PokedexScreen;