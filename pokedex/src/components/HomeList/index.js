import React, { useEffect, useState, useContext } from "react";
import CardPokemon from "../CardPokemon";
import { pokemonListUrl } from "../../constants/index.js";
import { Buttons, Container, SearchArea } from './styles';
import axios from 'axios';
import GlobalContext from "../../contexts/GlobalContext";
import { goToDetails } from "../../coordinator/coordinator";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import SelectPagination from "../SelectPagination";



const HomeList = () => {

  const { pokedex, setPokedex, list, setList, setIdPoke } = useContext(GlobalContext);

 
  const url = `${pokemonListUrl}/?limit=1151`
  const [search,setSearch] = useState('')
  const [itensPerPage, setItensPerPage] = useState(30)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(list && list.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex =  startIndex + itensPerPage
  const currentPokemons = list && list.slice(startIndex, endIndex)

  const navigate = useNavigate()

  useEffect(() => requestData,[list])

  

  const requestData = async () => {
    const res = await axios.get(url)
    const listRequest = res.data.results;
  

    const newList = listRequest
    .filter((pokemon)=>pokemon.name.toLowerCase().includes(search.toLocaleLowerCase()))
    .filter((item) => {
      const find = pokedex.find((url) => {
        if (item.url === url) {
          return true
        }})
      if (!find) {
        return item
      }})
    setList(newList)
  }
  const renderList = currentPokemons.map((item) => {

    return <CardPokemon
      link={item.url}
      key={item.url}
      actionName="I Choose u!"
      onClick={() => addToPokedex(item.url)}
      onClickDetails={() => detailsButton(item.name)}
    />

  })

  const addToPokedex = (id) => {
    setPokedex([...pokedex, id])
    const newList = list.filter((item) => {
      if (item.url !== id) {
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
  
  const handleInput = async(e)=>{
    setSearch(e.target.value)
  }

  return (
    <Container>
      <Buttons>
        <SearchArea>
        <SelectPagination
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
        />
        <input 
        onChange={handleInput} 
        value={search}
        placeholder="Search pokemons by name"
        />
        </SearchArea>
        <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />

      </Buttons>
      {renderList}
      <Buttons> 
         <Pagination
         pages={pages}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         />
      </Buttons>
      
    </Container>
  );
}

export default HomeList;