import React from "react";
import Header from "./components/headerfooter/Header"
import Main from "./components/main/Main"
import Footer from "./components/headerfooter/Footer"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import {app} from "./components/firebase"


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  );
}
export default App;
