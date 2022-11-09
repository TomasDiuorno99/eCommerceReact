import React from 'react';
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import ProductsList from "./Productos"

const Pages = () =>{
    return(
       <section>
        <Routes>
            <Route exact path="/" element = {<Inicio/>}/>
            <Route exact path="/productos" element = {<ProductsList/>}/>
        </Routes>
       </section> 
    )
}

export default Pages