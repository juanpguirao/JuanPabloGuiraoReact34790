import React from "react"
import {Routes, Route} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"


const Main=()=>{
    return(
        <main>
            <Routes>
    
                 <Route path='/inicio' element={<ItemListContainer/>}/>
                    <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
                    <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </main>
    )
}
export default Main