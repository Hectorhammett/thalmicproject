import React, {Component} from 'react';

import NewEventModal from './NewEventModal';

const SET_OF_MODALS = {
    newEvent: {
        title: "Create New Event",
        body: NewEventModal,
        store: "events",
        props: ["saveNewEvent","savingError","savingErrorMessage"]
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
            fade: open
        };
    }

    componentWillReceiveProps(nextProps) {
        let state = {...this.state};
        state.fade = nextProps.open;
        this.setState(state);
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

    closeModal(event){
        if(!event.target.className.split(" ").includes("modal-backdrop"))
            return;
        let state = { ...this.state };
        const { closeModal } = this.props;
        state.fade = false;
        this.setState(state);
        setTimeout(() => { closeModal() },250);
    }

    render() {
        const { open, modal, actions } = this.props
        const { fade } = this.state;

        const filteredModal = SET_OF_MODALS[modal]
        const SpecificModal = ( filteredModal ) ? filteredModal.body : () => {return <div></div>};
        const modalProps = this.gatherProps(filteredModal);
        
        return (
            <div className={ "modal-backdrop" + ( open ? " open" : "" ) + ( fade ? " fade" : "") } onClick={ this.closeModal.bind(this) }>
                <ModalBody header={ (filteredModal) ? filteredModal.title : null }>
                    <SpecificModal {...modalProps}/>
                </ModalBody>
            </div>
        );
    }
}

export default Modal;