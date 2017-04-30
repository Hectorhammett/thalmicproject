import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '../components/Modal';
import { closeModal } from '../actions/ModalActions';

class ModalContainer extends Component {
    render() {
        const { modal, open, closeModal } = this.props;
        return (
            <Modal open={ open } closeModal={ closeModal }/>
        )
    }
}

function mapStateToProps(store){
    return {
        ...store.modal
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ closeModal }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer);