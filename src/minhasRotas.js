import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Ex1 from "./paginas/Ex1";
import Ex2 from "./paginas/Ex2";

function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/ex1" element={<Ex1 />}/>
                <Route path="/ex2" element={<Ex2 />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MinhasRotas;