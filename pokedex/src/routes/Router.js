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
    const [details,setDetails] = useState('');
    const [list,setList] = useState([])

    return(
        <BrowserRouter>
        <GlobalContext.Provider value={{pokedex,setPokedex,details,setDetails,list,setList}}>
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