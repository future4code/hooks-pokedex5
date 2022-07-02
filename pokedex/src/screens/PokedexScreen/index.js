import React from "react";
import { Container } from './styles'
import CardHome from '../../components/CardPokemon/index'
import Header from "../../components/Header";


const PokedexScreen = () => {
  return (
    <Container>
      <Header/>
      <CardHome />
    </Container>
  );
}

export default PokedexScreen;