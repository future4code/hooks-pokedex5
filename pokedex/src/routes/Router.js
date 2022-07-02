import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsScreen from "../screens/DetailsScreen";
import ErrorScreen from "../screens/ErrorScreen";
import HomeScreen from "../screens/HomeScreen";
import PokedexScreen from "../screens/PokedexScreen";
import Header from "../components/Header/index"


function Router(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route index path="/" element={<HomeScreen />} />
                <Route path="/pokedex" element={<PokedexScreen />} />
                <Route path="/:id/details" element={<DetailsScreen />} />
                <Route path="*" element={<ErrorScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;