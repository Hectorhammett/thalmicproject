import React, {Component} from 'react';

class RightBar extends Component {
    toggleCollapse(){
        const { collapseRightBar, extendRightBar, rightbarCollapsed } = this.props;
        if(rightbarCollapsed)
            extendRightBar();
        else
            collapseRightBar();
    }

    render() {
        let { children, rightbarCollapsed } = this.props;

        return (
            <div className={ "right-bar" + ( rightbarCollapsed ? " collapsed" : "" ) }>
                <div className="open-arrow" onClick={ this.toggleCollapse.bind(this) }></div>
                <div className="content-wrapper">
                    { children }
                </div>
            </div>
        );
    }
}

export default RightBar;