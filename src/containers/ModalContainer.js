/**
 * Modal Container
 * This container is used to wire the store to the Modal Component
 */

import { bindActionCreators } from 'redux';
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Components */
import Modal from '../components/Modal';

/* Actions */
import { closeModal } from '../actions/ModalActions';
import { saveNewEvent, cancelDeleteEvent, confirmDeleteEvent } from '../actions/EventsActions';

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
        saveNewEvent,
        cancelDeleteEvent,
        confirmDeleteEvent
     }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer);