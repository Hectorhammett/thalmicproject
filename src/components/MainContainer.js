/**
* MainContainer Component
* This component is the main view on the app, which is reutilizable. This one accepts any children to be rendered inside it
*
* @author  Hector Mendoza
* @version 1.0
* @since   2017-04-30 
*/

import React, {Component} from 'react';

class MainContainer extends Component {
    render() {
        let { children, rightbarCollapsed } = this.props;
        console.log("Props", this.props )
        return (
            <div className={ "main-container" + ( rightbarCollapsed ? " extended" : "" ) }>
                { children }
            </div>
        );
    }
}

export default MainContainer;