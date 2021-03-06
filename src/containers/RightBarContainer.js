/**
 * Right Bar Container
 * Container used to wire the Right Bar to the Store
 */

import { bindActionCreators } from 'redux';
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Actions */
import { collapseRightBar, extendRightBar } from '../actions/RightBarActions';

/* Components */
import RightBar from '../components/RightBar';

class RightBarContaier extends Component {
    render() {
        let { children } = this.props;
        return (
            <RightBar {...this.props}>
                { children }
            </RightBar>
        );
    }
}

function mapStateToProps(store){
    return {
        ...store.rightBar
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        collapseRightBar,
        extendRightBar
    }, dispatch);
}  

export default connect(mapStateToProps, mapDispatchToProps)(RightBarContaier);