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