import React, {Component} from 'react';

import NewEventModal from './NewEventModal';

const ARRAY_OF_MODALS = {
    NewEventModal
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
        const { open } = this.props
        const { fade } = this.state;
        return (
            <div className={ "modal-backdrop" + ( open ? " open" : "" ) + ( fade ? " fade" : "") } onClick={ this.closeModal.bind(this) }>
                <ModalBody header="Create New Event">
                    <NewEventModal />
                </ModalBody>
            </div>
        );
    }
}

export default Modal;