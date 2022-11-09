import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import AppRouter from "./Components/AppRouter";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
