import React from 'react';
import Menu from "./Menu.js"
import Home from "./Home.js"
import Contact from "./Contact.js"
import About from "./About.js"
import { Route, Redirect } from 'react-router-dom'

const Body = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            {/* <Redirect from="/" to="/home" /> */}
        </div>
    );
}

export default Body;  