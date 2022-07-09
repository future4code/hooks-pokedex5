import React from 'react'
import ButtonPage from '../ButtonPage'
import { Container } from './styles'

const Pagination = ({pages, setCurrentPage}) => {

    const buttonsPages = Array.from(Array(pages), (_, index) => {
        return <ButtonPage
          key={index}
          onClick={() => setCurrentPage(index)}
          children={index + 1}
        >
          
        </ButtonPage>
      })
    
    return(
        <Container>
        {buttonsPages}
        </Container>
    )
}

export default Pagination 