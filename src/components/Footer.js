import React from "react";
import Nav from "./NavBar";

const Footer = () =>{
    return(
        <footer>
            <div className="redes">
                <a href="https:///www.facebook.com/">facebook</a>
                <a href="https:///www.instagram.com/">instagram</a>
                <a href="https:///www.twitter.com/">twitter</a>
            </div>
            <div>
                map
            </div>
            <div>
                <Nav/>
            </div>
        </footer>
    )
}
export default Footer