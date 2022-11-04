import React from "react"
import {Routes, Route} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"

const Main=()=>{
    return(
        <main>
            <Routes>
    
                <Route path='/inicio' element={<ItemListContainer/>}/>
                <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </main>
    )
}
export default Main