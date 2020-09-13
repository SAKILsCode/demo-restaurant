import React from 'react';
import Header from "./header/Header.js"
import Footer from "./footer/Footer.js"
import Body from "./body/Body.js"

const MainComponent = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default MainComponent;