/**
 * Main Panel Container
 * Container used to wire the Store to the Main Panel Component
 */

import { bindActionCreators } from 'redux';
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Components */
import MainContainer from '../components/MainContainer';

class MainPanelContainer extends Component {
    render() {
        let { children } = this.props;
        return (
            <MainContainer {...this.props}>
                { children }
            </MainContainer>
        );
    }
}

function bindStateToProps(store){
    return {
        ...store.rightBar
    }
}

export default connect(bindStateToProps)(MainPanelContainer);