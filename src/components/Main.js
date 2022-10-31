import React from "react"
import Banner from "./main/Banner"
import ProductContainer from "./ProductContainer"
import {Routes, Route} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"


const Main=()=>{
    return(
        <main>
            <Routes>
    
                 <Route path='/inicio' element={<ItemListContainer/>}/>

                 <Route path='*' element={<h1>ERROR 404</h1>}/>
            </Routes>
        </main>
    )
}
export default Main