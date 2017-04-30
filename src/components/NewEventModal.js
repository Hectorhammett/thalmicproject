import React, {Component} from 'react';

class NewEventModal extends Component {
    constructor(){
        super();
        this.state = {
            "type": "",
            "serviceId": "",
            "icon": "",
            "timestamp": "",
            "title": "",
            "data": "",
            "disabled": true
        }
    }

    simpleValidation(state){
        if(state.type === "" || state.icon === "" || state.title === "" || state.data === "")
            return true;
        return false;
    }

    handleOnChange(data,event){
        let state = {...this.state};
        state[data] = event.target.value;
        state.disabled = this.simpleValidation(state);
        this.setState(state);
    }

    handleSaveNewEvent(){
        let { saveNewEvent } = this.props;
        let newEvent = { ...this.state };
        saveNewEvent(newEvent);
    }

    render() {
        const { type, icon, title, data, disabled } = this.state;
        const { savingError, saving, savingErrorMessage } = this.props;
        let alert = null;
        if( savingError )
            alert = <div className="alert alert-danger">
                        { savingErrorMessage }
                    </div>
        return (
            <div className="form-container">
                <div className="form-group">
                    <label> Type of Event </label>
                    <input type="text" value={ type } onChange={ this.handleOnChange.bind(this,"type") }/>
                </div>
                <div className="form-group">
                    <label> Icon URL </label>
                    <input type="text" value={ icon } onChange={ this.handleOnChange.bind(this,"icon") }/>
                </div>
                <div className="form-group">
                    <label> Title of the event </label>
                    <input type="text" value={ title } onChange={ this.handleOnChange.bind(this,"title") }/>
                </div>
                <div className="form-group">
                    <label> Data of the Event </label>
                    <textarea value={ data } onChange={ this.handleOnChange.bind(this,"data") }></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={ this.handleSaveNewEvent.bind(this) } disabled={disabled}>Create new Event</button>
                </div>
                { alert }
            </div>
        );
    }
}

export default NewEventModal;