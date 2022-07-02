import React from "react"
import { useNavigate } from "react-router-dom"
import { goToDetails, goToHome, goToPokedex } from "../../coordinator/coordinator"
import { BoxButton, Container } from "./styles"

const Header = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <BoxButton>
                <button onClick={() => goToHome(navigate)}>Home</button>
                <button onClick={() => goToPokedex(navigate)}>pokedex</button>
                <button onClick={() => goToDetails(navigate)}>details</button>
            </BoxButton>
        </Container>
    )
}

export default Header