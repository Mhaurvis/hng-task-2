import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Footer.css';

function Footer(){
    return(
        <div className="myFooter">
            <div className="socials">
                <span className="fa fa-facebook"></span>
                <span className="fa fa-instagram"></span>
                <span className="fa fa-twitter"></span>
                <span className="fa fa-youtube-play"></span>
            </div>

            <div className="links">
                <a href="">Conditions of Use</a>
                <a href="">Privacy & Policy</a>
                <a href="">Press Room</a>
            </div>

            <div className="copyRights">
                2023 MovieBox by Maurice
            </div>
        </div>
    )
}

export default Footer;