import React, {Component} from 'react';
import { PHONE_SCREENS_BREAKPOINT } from '../constants';
console.log(PHONE_SCREENS_BREAKPOINT);
 
class RightBar extends Component {
    componentWillMount() {
        const { collapseRightBar, rightbarCollapsed } = this.props;
        console.log(PHONE_SCREENS_BREAKPOINT);
        if(window.innerWidth < PHONE_SCREENS_BREAKPOINT) {
            collapseRightBar();
        }
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.collapseRightBarBreakPoint.bind(this));
    }

    collapseRightBarBreakPoint() {
        const { collapseRightBar, rightbarCollapsed } = this.props;
        if(window.innerWidth < PHONE_SCREENS_BREAKPOINT && !rightbarCollapsed) {
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