export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToDetails = (navigate, id) => {
    navigate(`/${id}/details`)
}

