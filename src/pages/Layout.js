import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { isMobile } from 'react-device-detect';
import "../App.css";
import config from "../config.json";
import Footer from "../elements/Footer";

const Layout = () => {
    const RandomBackground = () =>{
        const RandomBackgroundNumber =  Math.floor(Math.random() * 4) + 1;
        switch (RandomBackgroundNumber){
            case 1:  return "background1.jpg";
            case 2:  return "background2.jpg";
            case 3:  return "background3.jpg";
            case 4:  return "background4.jpg";
            default: return "background1.jpg";
        }
    }

    const hoverElementRef = useRef(null);
    const targetElementRef = useRef(null);
    const [isOverlapping, setIsOverlapping] = useState(true);
    
    const isHovering = (element1, element2) => {
    if (!element1 || !element2) {
        return false;
    }

    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );};

    // eslint-disable-next-line
    const checkOverlapOnScroll = () => {
    const hoverElement = hoverElementRef.current;
    const targetElement = targetElementRef.current;

    if (isHovering(hoverElement, targetElement)) {
        setIsOverlapping(true);
    } else {
        setIsOverlapping(false);
    }};

    // eslint-disable-next-line
    useEffect(() => {
    // eslint-disable-next-line
    window.addEventListener("scroll", checkOverlapOnScroll);
    // eslint-disable-next-line
    checkOverlapOnScroll();
    return () => {
        // eslint-disable-next-line
        window.removeEventListener("scroll", checkOverlapOnScroll);
    };
    // eslint-disable-next-line
    },[]);
    const ClassHeader = "header"
    const Background = RandomBackground();
    if (isMobile){
        const ClassHeader = "header mobile"
    }
    return (
        <div style={{backgroundImage : `url("/src/background/${Background}")`}} className="globalDiv">
            <div>
                <div ref={hoverElementRef} className={ClassHeader} style={{backgroundColor: isOverlapping ? "#ffffff00" : "rgb(51, 48, 48)",}}>
                    <Link className="logo" to="/"><img alt="logo omen dev" src="/src/logo_omen_dev.png"></img></Link>
                    <Link to="/jobs">jobs</Link>
                    <Link to="/support">support</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/game">game</Link>
                </div>
                <div ref={targetElementRef} className="welcomeDiv">
                </div>
                <Outlet>
                </Outlet> 
            </div>
            <Footer email={config["email"]}></Footer>
        </div>
    );
};

export default Layout;
