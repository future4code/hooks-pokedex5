import React from "react";
import HomeList from "../../components/HomeList";
import {Container} from './styles'
import Header from "../../components/Header";

const HomeScreen = () => {


  return (

   <Container>
      <Header/>
      <HomeList/>
   </Container>
  );
}

export default HomeScreen;