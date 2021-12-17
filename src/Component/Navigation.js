import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class Navigation extends Component {

    clickHandler=()=>{
        sessionStorage.clear();
    }

    render() {
        return (
            <div>
            
            
                <ul>
                    <li><NavLink exact activeStyle={{color:"yellow"}} to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"yellow"}} to="/about">About</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"yellow"}}  to="/services">Services</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"yellow"}}  to="/contact">Contact</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"yellow"}}  to="/protfolio">Protfolio</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"yellow"}} to="/login">Login</NavLink></li>
                    <li><button onClick={this.clickHandler}>logout</button></li>
                </ul>


        </div>
        );
    }
}

export default Navigation;