import React, {Component} from 'react';

class RightBar extends Component {
    render() {
        let { children } = this.props;
        return (
            <div className="right-bar">
                <div className="open-arrow"></div>
                <div className="content-wrapper">
                    { children }
                </div>
            </div>
        );
    }
}

export default RightBar;