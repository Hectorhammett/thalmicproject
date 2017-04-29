import React, {Component} from 'react';

class MainContainer extends Component {
    render() {
        let { children } = this.props;
        return (
            <div className="main-container">
                { children }
            </div>
        );
    }
}

export default MainContainer;