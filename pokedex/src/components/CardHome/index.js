import React from "react";
import {Container} from './styles';

const CardHome=(props)=>{

  return (
   <Container color="grass">
    <div>
        <img src={props.photoLin} alt="Pokemon" />
    </div>  
    <div>
        <h2>{props.name}</h2>
        <div>
            <button onClick={props.onClickAdd}>I choose You</button>
            <button onClick={props.onClickDetails}>Details</button>
        </div>
    </div>
   </Container>
  );
}

export default CardHome;