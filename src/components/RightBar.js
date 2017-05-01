/**
 * Right Bar Component
 * A Single component on the right of the screen, which is reutilizable. This can be used to display any desired data
 */

import React, {Component} from 'react';
import { PHONE_SCREENS_BREAKPOINT } from '../constants';


class RightBar extends Component {

    /**
     * Checks if the screen is a small screen ( window.innerWidth < breakpoint constant). If it is, it collapses the rightbar
     */
    componentWillMount() {
        const { collapseRightBar, rightbarCollapsed } = this.props;
        if(window.innerWidth < PHONE_SCREENS_BREAKPOINT) {
            collapseRightBar();
        }
    }
    
    /**
     * Adds a listener for the resize event. If it's smaller than the breakpoint, it collapses the rightbar
     */
    componentDidMount() {
        window.addEventListener('resize', this.collapseRightBarBreakPoint.bind(this));
    }

    /**
     * Method used to collapse the rightbar by the resize listener
     * @see componentDidMount
     */
    collapseRightBarBreakPoint() {
        const { collapseRightBar, rightbarCollapsed } = this.props;
        if(window.innerWidth < PHONE_SCREENS_BREAKPOINT && !rightbarCollapsed) {
            collapseRightBar();
        }
    }

    /**
     * Method used to toggle the collapse of the rightbar
     */
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