import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Components */
import MainContainer from "../components/MainContainer";

/* Actions */

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