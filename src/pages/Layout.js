import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { isMobile } from 'react-device-detect';
import "../App.css";
import config from "../contactConfig.json";
import { Footer } from "../elements/Footer";

const Layout = () => {

    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);
    const [ ClassHeader, setClassHeader ] = useState( "header" );
    const [ logoHeader, setLogoHeader ] = useState("block");
    const [ marginHeader, setMarginHeader ] = useState("30px");
    const [ widthHeader, setWidthHeader ] = useState("50vw");

    const burgerMenu = (force = null) => {
        const list = document.getElementById( "myLinks" );
        if ( list.style.display === "block" || force === "true") {
            console.log('hide');
            console.log(list.style.display)
            console.log(force)
            list.style.display = "none";
            line1.current.style.transform = '';
            line1.current.style.width = '';
            line1.current.style.height = '';
            line2.current.style.opacity = '';
            line3.current.style.transform = '';
            line3.current.style.width = '';
            line3.current.style.height = '';
        } else {
            console.log('display');
            console.log(list.style.display)
            list.style.display = "block";
            line1.current.style.transform = 'translateY(6px) rotate(45deg)';
            line1.current.style.width = '18.5px';
            line1.current.style.height = '0.5px';
            line2.current.style.opacity = '0';
            line3.current.style.transform = 'translateY(-6px) rotate(-45deg)';
            line3.current.style.width = '18.5px';
            line3.current.style.height = '0.5px';
        }
    }

    const isMobileHeader = () =>{
        if ( isMobile ){
            setClassHeader( "header_mobile" );
            document.getElementById( "myLinks" ).style.display = "none";
            setLogoHeader("none");
            setMarginHeader("60px");
            setWidthHeader("70vw");
            return true;
        }else if( window.innerWidth < 600 ){
            setClassHeader( "header_mobile" )
            document.getElementById( "myLinks" ).style.display = "none";
            setLogoHeader("none");
            setMarginHeader("60px");
            setWidthHeader("70vw");
            return true;
        }else{
            setClassHeader("header");
            setLogoHeader("block");
            setMarginHeader("30px");
            setWidthHeader("50vw");
            return false;
        }
    }

    const location = useLocation();

    useEffect(() => {
        if (isMobileHeader()){
            burgerMenu("true");
        }
    }, [location]);

    const RandomBackground = () =>{
        const RandomBackgroundNumber =  Math.floor( Math.random() * 4 ) + 1;
        switch ( RandomBackgroundNumber ){
            case 1:  return "background1.jpg";
            case 2:  return "background2.jpg";
            case 3:  return "background3.jpg";
            case 4:  return "background4.jpg";
            default: return "background1.jpg";
        }
    }

    const hoverElementRef = useRef( null );
    const targetElementRef = useRef( null );
    const [ isOverlapping, setIsOverlapping ] = useState( true );
    
    const isHovering = ( element1, element2 ) => {
        if ( !element1 || !element2 ) {
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

    const checkOverlapOnScroll = () => {
    const hoverElement = hoverElementRef.current;
    const targetElement = targetElementRef.current;

    if ( isHovering( hoverElement, targetElement ) ) {
        setIsOverlapping( true );
    } else {
        setIsOverlapping( false );
    }};

    useEffect( () => {
        window.addEventListener( 'scroll', checkOverlapOnScroll );
        window.addEventListener( 'resize', isMobileHeader );
        checkOverlapOnScroll();
        isMobileHeader();
        return () => {
            window.removeEventListener( 'scroll', checkOverlapOnScroll );
            window.removeEventListener( 'resize', isMobileHeader );
        };
    });
    const Background = RandomBackground();
    
    return (
        <div style={ { backgroundImage : `url("/src/background/${Background}")` } } className="globalDiv">
            <div>
                <div ref={ hoverElementRef } className={ ClassHeader } style={ { backgroundColor: isOverlapping ? "#ffffff00" : "rgb(51, 48, 48)" } }>
                    <Link className="logo" to="/"><img alt="logo omen dev" src="/src/logo_omen_dev.png"/></Link>
                    <div className="extanded">    
                        {
                        //<Link to="/jobs">jobs</Link>
                        }
                        <Link to="/support">support</Link>
                        <Link to="/contact">contact</Link>
                        <Link to="/game">game</Link>
                        <Link to="/history">history</Link>
                    </div>
                    <div className="tiny">
                        <button className="burgerIcon" onClick={burgerMenu}>
                            <del ref={line1}/>
                            <del ref={line2}/>
                            <del ref={line3}/>
                        </button>
                        <div id="myLinks">
                            {
                            //<Link to="/jobs">jobs</Link>
                            }
                            <br/>
                            <br/>
                            <Link to="/support">support</Link><br/>
                            <Link to="/contact">contact</Link><br/>
                            <Link to="/game">game</Link><br/>
                            <Link to="/history">history</Link>
                        </div>
                    </div>
                </div>
                <div ref={targetElementRef} className="welcomeDiv">
                    <div style={ { marginTop : marginHeader, width: widthHeader } }>
                        <img alt="logo header" src="/src/placeholder.jpg" style={ { width: widthHeader } }/>
                        <p>Omen dev is an independent roblox development studio</p>
                    </div>
                    <img id="logo" alt="omenDev logo" src="/src/logo_omen_dev.png"  style={ { display : logoHeader } }/>
                </div>
                <Outlet/>
            </div>
            <Footer email={ config["email"] }></Footer>
        </div>
    );
};

export { Layout };
export default Layout;