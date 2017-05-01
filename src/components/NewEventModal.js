/**
* New Event Modal
* Modal Body shown to the user when a new event is going to be stored to the DB 
* 
* @author  Hector Mendoza
* @version 1.0
* @since   2017-04-30 
*/

import React, {Component} from 'react';
import moment from 'moment';

/* Components */
import Spinner from "./Spinner";

class NewEventModal extends Component {
    constructor(){
        super();
        this.state = {
            event: {
                "type": "",
                "serviceId": "",
                "icon": "",
                "timestamp": "",
                "title": "",
                "data": ""
            },
            "disabled": true
        }
    }

    /**
     * This function is a simple validation for the new event object. This only checks if the user has typed on all the mandatory
     * inputs on the modal. If it doesnt, it disables the submit button
     * 
     * @param {object} state State with all the properties of the new event 
     */
    simpleValidation(state){
         if(state.type === "" || state.icon === "" || state.title === "" || state.data === "")
            return true;
        return false;
    }

    /**
     * Function utilized for databinding. When the user types on the inputs, this is fired by onChange event
     * 
     * @param {string} data The field to update 
     * @param {object} event The event Object
     */
    handleOnChange(data,event){
        let state = { ...this.state };
        let newEvent = {...this.state.event};
        newEvent[data] = event.target.value;
        state.disabled = this.simpleValidation(newEvent);
        state.event = newEvent;
        this.setState(state);
    }

    /**
     * Save new event method
     */
    handleSaveNewEvent(){
        let { saveNewEvent } = this.props;
        let newEvent = { ...this.state.event };
        newEvent.serviceId = Math.random() * 1000000000;
        newEvent.timestamp = moment();
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
                    *All inputs are required
                </div>
                <div className="form-group">
                    <label> Title of the event </label>
                    <input type="text" value={ title } onChange={ this.handleOnChange.bind(this,"title") }/>
                </div>
                <div className="form-group">
                    <label> Type of Event </label>
                    <input type="text" value={ type } onChange={ this.handleOnChange.bind(this,"type") }/>
                </div>
                <div className="form-group">
                    <label> Icon URL </label>
                    <input type="text" value={ icon } onChange={ this.handleOnChange.bind(this,"icon") }/>
                </div>
                <div className="form-group">
                    <label> Data of the Event </label>
                    <textarea value={ data } onChange={ this.handleOnChange.bind(this,"data") }></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={ this.handleSaveNewEvent.bind(this) } disabled={ disabled || saving }>{ ( saving ) ? "Saving the event" : "Create new Event" }</button>
                    { (saving) ? <Spinner inline={true}/> : null }
                </div>
                { alert }
            </div>
        );
    }
}

export default NewEventModal;