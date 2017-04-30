import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import Modal from '../components/Modal';

const MODAL_COMPONENTS = {

}

/* Actions */
import { closeModal } from '../actions/ModalActions';
import { saveNewEvent } from '../actions/EventsActions';

class ModalContainer extends Component {
    render() {
        return (
            <Modal { ...this.props } />
        )
    }
}

function mapStateToProps(store){
    return {
        ...store.modal,
        ...store.events
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        closeModal,
        saveNewEvent
     }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer);