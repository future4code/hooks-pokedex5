import React from "react"
import { useNavigate } from "react-router-dom"
import { goToDetails, goToHome, goToPokedex } from "../../coordinator/coordinator"
import { BoxButton, Container } from "./styles"
import BG from  '../../assets/img/BG.png'

const Header = () => {
    const navigate = useNavigate()
    return (
        <Container img={BG}>
            <BoxButton>
                <button onClick={() => goToHome(navigate)}><b>Home</b></button>
                <button onClick={() => goToPokedex(navigate)}><b>Pokedex</b></button>
                {/* <button onClick={() => goToDetails(navigate)}><b></b></button> */}
            </BoxButton>
        </Container>
    )
}

export default Header