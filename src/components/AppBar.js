import React, {Component} from 'react';
import Logo from '../images/thlabs.svg';

class AppBar extends Component {
    render() {
        return (
            <div className="app-bar">
                <img src={Logo} className="logo" alt="Thalmic Labs Logo"/>
                <h1>Take Home Challenge</h1>
            </div>
        );
    }
}

export default AppBar;