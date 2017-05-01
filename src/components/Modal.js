/**
* Modal Element
* This element utilizes an object of modals named SET_OF_MODALS
* This element is a wrapper for all the different modals. So if a modal is needed, you could simple create the body, and reutilize
* the animation and the body of the same modal, just exchanging the body. With this the element Modal becomse highly reutilizable.
*
* @author  Hector Mendoza
* @version 1.0
* @since   2017-04-30 
*/

import React, {Component} from 'react';

/*
* All the Differen Modals that are being used and swaped inside the modal body.
*/
import NewEventModal from './NewEventModal';
import DeleteEventModal from './DeleteEventModal';

/*
* A SET of modals with all the elements, title for the header of the modal and the props need by the body.
*/
const SET_OF_MODALS = {
    newEvent: {
        title: "Create New Event",
        body: NewEventModal,
        props: ["saveNewEvent","savingError","savingErrorMessage", "savingNewEvent", "errorSavingNewEvent", "saving"]
    },
    deleteEvent: {
        title: "Delete Event",
        body: DeleteEventModal,
        props: ["eventToDelete","cancelDeleteEvent", "confirmDeleteEvent", "deletingEvent", "deletingEventError", "deletingEventErrorMessage", "selectedEventIndex"]
    }
};


/**
* This element is the inside body of the modal. This element renders the HTML needed for the specific Modal
*/
class ModalBody extends Component {
    render(){
        const { header, children, closeModal } = this.props;
        return (
            <div className="modal-body">
                <div className="modal-header">
                    <h1>{ header }<i className="fa fa-times close-button" aria-hidden="true" onClick={ closeModal }></i></h1>
                </div>
                <div className="modal-content">
                    { children }
                </div>
            </div>
        )
    }
}

/**
* Modal Component
* This component is reutilizable by all the modals. Whenever a modal is displayed, this element is the one which is displayed
* only the inside body is swaped by the dispatched event and filtered from the set.
*/
class Modal extends Component {
    constructor(props){
        super(props);
        const { open } = this.props;
        this.state = {
            fade: open,
            open: open
        };
    }

    /**
    * Utilized for when and outer event tries to close the modal
    */
    componentWillReceiveProps(nextProps) {
        if(!nextProps.lock){
            if(nextProps.open)
                this.openModal();
            else
                this.closeModal(true);
        }
    }

    /**
    * Function that receives the modal object from the SET of modals, checks the required props, and creates an object 
    * which has all the required props for the specific modal.
    *
    * @param modal Modal object from SET_OF_MODALS
    * @return object An object of all the props needed from this component
    */
    gatherProps(modal){
        if(modal === undefined)
            return {};
        
        let props = {};
        for(let prop of modal.props){
            props[prop] = this.props[prop];
        };
        
        return props;
    }

    /**
     * Function to close the modal. It checks if it's from a click event (!bypass) or programatically (bypass)
     * 
     * @param {*} bypass Weather the function was being called by a user click or programatically
     * @param {*} event The event object in case that it was generated by the user interacting with the page
     */
    closeModal(bypass,event){
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

    /**
     * Function that opens the modal
     */
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
                <ModalBody header={ (filteredModal) ? filteredModal.title : null } closeModal={ this.closeModal.bind(this) }>
                    <SpecificModal {...modalProps}/>
                </ModalBody>
            </div>
        );
    }
}

export default Modal;