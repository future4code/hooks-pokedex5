import React from "react";
import Header from "../../components/Header";

import HomeList from "../../components/HomeList";
import {Container} from './styles'

const HomeScreen = () =>{
  return (

   <Container>
      <Header/>
      <HomeList/>
   </Container>
  );
}

export default HomeScreen;