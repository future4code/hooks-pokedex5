import React from "react"
import { useNavigate } from "react-router-dom"
import { goToDetails, goToHome, goToPokedex, goBack } from "../../coordinator/coordinator"
import { BoxButton, Container } from "./styles"
import BG from  '../../assets/img/BG.png'

const Header = (props) => {
    const navigate = useNavigate()

    const showBackButton = () => {
            if (props.detailPage) {
                return <button onClick={() => goBack(navigate)}><b>Back</b></button>
            }
   
    }

    return (
        <Container img={BG}>
            <BoxButton>
                <button onClick={() => goToHome(navigate)}><b>Home</b></button>
                <button onClick={() => goToPokedex(navigate)}><b>Pokedex</b></button>
                {/* <button onClick={() => goToDetails(navigate)}><b></b></button> */}
                {showBackButton()}
            </BoxButton>
        </Container>
    )
}

export default Header