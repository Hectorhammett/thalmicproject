import React, {Component} from 'react';

class NewEventModal extends Component {
    render() {
        return (
            <div className="form-container">
                <div className="form-group">
                    <label> Type of Event </label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label> Type of Event </label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Create new Event</button>
                </div>
            </div>
        );
    }
}

export default NewEventModal;