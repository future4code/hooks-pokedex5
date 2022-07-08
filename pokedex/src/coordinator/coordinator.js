export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToDetails = (navigate, id) => {
    navigate(`/${id}/details`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

