import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Ex1 from "./paginas/Ex1";
import Ex2 from "./paginas/Ex2";
import Relogio from "./paginas/Relogio";
import Gallery from "./paginas/Gallery";
import App from "./App";

function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/app" element={<App />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/ex1" element={<Ex1 />}/>
                <Route path="/ex2" element={<Ex2 />}/>
                <Route path="/relogio" element={<Relogio />}/>
                <Route path="/gallery" element={<Gallery />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MinhasRotas;