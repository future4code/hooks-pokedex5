import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsScreen from "../screens/DetailsScreen";
import ErrorScreen from "../screens/ErrorScreen";
import HomeScreen from "../screens/HomeScreen";
import PokedexScreen from "../screens/PokedexScreen";
// import Header from "../components/Header/index"
import GlobalContext from "../contexts/GlobalContext";
import {useState} from 'react';


function Router(){
    const [pokedex,setPokedex] = useState([]);
    const [details,setDetails] = useState(''); //n sei se esse vocês fizeram p mim -gi- mas de qlqr forma fiz outro
    const [list,setList] = useState([])
    const [idPoke, setIdPoke] = useState('')

    return(
        <BrowserRouter>
        <GlobalContext.Provider value={{pokedex, setPokedex, details, setDetails, list, setList, idPoke, setIdPoke}}>
            <Routes>
                <Route index path="/" element={<HomeScreen />} />
                <Route path="/pokedex" element={<PokedexScreen />} />
                <Route path="/:id/details" element={<DetailsScreen />} />
                <Route path="*" element={<ErrorScreen />} />
            </Routes>
            </GlobalContext.Provider>
        </BrowserRouter>
    )
}

export default Router;
