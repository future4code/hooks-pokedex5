import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import CardHome from "../CardHome";
import { apiUrl } from "../constants/constants.js";
import {Container} from './styles';
import axios from 'axios';



const HomeList=()=>{
  const [quantity,setQuantity] = useState('20')
  const [offset,setOffset] = useState('0')
  const url = `${apiUrl}/?limit=${quantity}&offset=${offset}`
  const [list,setList] = useState([])

  useEffect(()=>requestData,[])

  const requestData =async () =>{
    const res = await axios.get(url)
    setList(res.data.results)
  }
 const renderList = list && list.map((item)=>{
  return <CardHome link={item.url} key={item.name}/>
 })

  

  return (
   <Container>
    {renderList}
   </Container>
  );
}

export default HomeList;