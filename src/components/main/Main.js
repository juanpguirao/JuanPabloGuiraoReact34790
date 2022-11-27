import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Carrito from "../pages/Carrito"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const Main=()=>{
    return(
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/Carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </main>
    )
}
export default Main