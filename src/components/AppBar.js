/**
* App Bar component.
* This component is the top part of the screen, displaying the app name
*
* @author  Hector Mendoza
* @version 1.0
* @since   2017-04-30 
*/

import React, {Component} from 'react';
import Logo from '../images/thlabs.svg';
import Badge from '../images/th-badge.png'

class AppBar extends Component {
    render() {
        return (
            <div className="app-bar">
                <img src={Logo} className="logo hidden-xs-inline" alt="Thalmic Labs Logo"/>
                <img src={Badge} className="logo visible-xs-inline" alt="Thalmic Labs Logo"/>
                <h1>Take Home Challenge</h1>
            </div>
        );
    }
}

export default AppBar;