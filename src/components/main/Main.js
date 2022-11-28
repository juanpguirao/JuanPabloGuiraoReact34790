import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import {Carrito} from "./Carrito"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const Main=()=>{
    return(
        <main>
            <Routes>
                <Route path='/home' element={<Home/>}/> 
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404 La página indicada no existe!</h1>}/>
            </Routes>
        </main>
    )
}
export default Main