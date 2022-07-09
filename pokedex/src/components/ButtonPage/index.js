import React from "react";
import {Container} from './styles'

const ButtonPage=({onClick,children})=>{
  return (
   <Container onClick={onClick}>
    {children}
   </Container>
  );
}

export default ButtonPage;