import React, {Component} from 'react';

const PHONE_SCREENS_BREAKPOINT = 769;

class RightBar extends Component {
    componentWillMount() {
        const { collapseRightBar, rightbarCollapsed } = this.props;
        if(window.innerWidth < 769 && !rightbarCollapsed) {
            collapseRightBar();
        }
    }
    

    componentDidMount() {
        window.addEventListener('resize', this.collapseRightBarBreakPoint.bind(this));
    }

    collapseRightBarBreakPoint() {
        const { collapseRightBar, rightbarCollapsed } = this.props;
        if(window.innerWidth < 769 && !rightbarCollapsed) {
            collapseRightBar();
        }
    }

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