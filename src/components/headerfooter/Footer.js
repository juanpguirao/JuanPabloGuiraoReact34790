import React from "react";
import Nav from "./NavBar";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="redes footer_column">
                <a href="https:///www.facebook.com/">facebook</a>
                <a href="https:///www.instagram.com/">instagram</a>
                <a href="https:///www.twitter.com/">twitter</a>
            </div>
            <div className="footer_column">
                <p> Todos los derechos reservados</p>
            </div>
            <div className="footer_column">
                <Nav/>
            </div>
        </footer>
    )
}
export default Footer