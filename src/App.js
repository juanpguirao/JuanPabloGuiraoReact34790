import React from "react";
import Header from "./components/headerfooter/Header"
import Main from "./components/main/Main"
import Footer from "./components/headerfooter/Footer"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import CustomProvider from "./components/main/CustomProvider"

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
