import React, {Component} from 'react';

class RightBar extends Component {
    render() {
        let { children } = this.props;
        return (
            <div className="right-bar">
                { children }
            </div>
        );
    }
}

export default RightBar;