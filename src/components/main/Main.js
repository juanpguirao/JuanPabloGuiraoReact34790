import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import {Carrito} from "./Carrito"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Compra  from "../pages/Compra"
import Form  from "../pages/Form"

const Main=()=>{
    return(
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/carrito/compra' element={<Compra />} />
                <Route path='/carrito/compra/form' element={<Form />} />
                <Route path='*' element={<h1>404 La página indicada no existe!</h1>}/>
            </Routes>
        </main>
    )
}
export default Main