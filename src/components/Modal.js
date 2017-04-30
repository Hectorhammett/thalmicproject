import React, {Component} from 'react';

import NewEventModal from './NewEventModal';
import DeleteEventModal from './DeleteEventModal';

const SET_OF_MODALS = {
    newEvent: {
        title: "Create New Event",
        body: NewEventModal,
        props: ["saveNewEvent","savingError","savingErrorMessage", "saving"]
    },
    deleteEvent: {
        title: "Delete Event",
        body: DeleteEventModal,
        props: ["eventToDelete","cancelDeleteEvent", "confirmDeleteEvent", "deletingEvent", "deletingEventError", "deletingEventErrorMessage", "selectedEventIndex"]
    }
};

class ModalBody extends Component {
    render(){
        const { header, children } = this.props;
        return (
            <div className="modal-body">
                <div className="modal-header">
                    <h1>{ header }</h1>
                </div>
                <div className="modal-content">
                    { children }
                </div>
            </div>
        )
    }
}

class Modal extends Component {
    constructor(props){
        super(props);
        const { open } = this.props;
        this.state = {
            fade: open,
            open: open
        };
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.lock){
            if(nextProps.open)
                this.openModal();
            else
                this.closeModal(true);
        }
    }

    gatherProps(modal){
        if(modal === undefined)
            return {};
        
        let props = {};
        for(let prop of modal.props){
            props[prop] = this.props[prop];
        };
        
        return props;
    }

    closeModal(bypass,event){
        console.log(bypass)
        if((!bypass && !event.target.className.split(" ").includes("modal-backdrop")) || this.props.lock)
            return;
        let state = { ...this.state };
        const { closeModal } = this.props;
        state.fade = false;
        this.setState(state, timeout);

        let timeout = setTimeout(() => { 
            state.open = false
            this.setState(state);
            const { closeModal } = this.props;
            closeModal();
        },250);
    }

    openModal(){
        let state = { ...this.state };
        state.open = true;
        state.fade = true;
        this.setState(state);
    }

    render() {
        const { modal, actions } = this.props
        const { fade, open } = this.state;

        const filteredModal = SET_OF_MODALS[modal]
        const SpecificModal = ( filteredModal ) ? filteredModal.body : () => {return <div></div>};
        const modalProps = this.gatherProps(filteredModal);
        
        return (
            <div className={ "modal-backdrop" + ( open ? " open" : "" ) + ( fade ? " fade" : "") } onClick={ this.closeModal.bind(this,false) }>
                <ModalBody header={ (filteredModal) ? filteredModal.title : null }>
                    <SpecificModal {...modalProps}/>
                </ModalBody>
            </div>
        );
    }
}

export default Modal;