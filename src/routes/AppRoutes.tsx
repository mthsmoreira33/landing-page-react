import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Teste from "../pages/Teste";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/teste" element={<Teste/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
