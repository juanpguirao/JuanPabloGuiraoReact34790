import React from "react";
import Header from "./components/headerfooter/Header"
import Main from "./components/main/Main"
import Footer from "./components/headerfooter/Footer"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import CustomProvider from "./CustomProvider"

export const context = createContext();
const {Provider} = context;
const cartItems={
  cartItems: [
    {id: 1, name: "Camisa", price: 100},
    {id: 2, name: "Pantalon", price: 200},
    {id: 3, name: "Zapatos", price: 300},
  ],qty: 3
}

function App() {
  return (
    <CustomProvider>
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
    </CustomProvider>
  );
}
export default App;
