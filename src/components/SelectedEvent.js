/**
 * Selected Event Component
 * This component is used to show the selected event clicked by the user.
 * This component is utilized as a children inside the Main Container component
 * 
 * @author Hector Mendoza
 * @version 1.0
 * @since 2017/5/1
 */

import React, {Component} from 'react';

import NoThumbnail from '../images/no-thumb.jpg';

class SelectedEvent extends Component {
    render() {
        let { event, removeEvent, selectedEventIndex } = this.props;
        event.url = "test";
                
        return (
            <div className="panel">
                <div className="panel-header">
                    <h1>{ event.title }</h1>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 text-center-xs">
                            <img src={( event.icon ? event.icon : NoThumbnail )} className="img-responsive event-thumbnail"/>
                        </div>
                        <div className="col-sm-8">
                            <p>
                                <h3>Event Type:</h3>
                                { event.type }                         
                            </p>
                            <p>
                                <h3>Service Id:</h3>
                                { event.serviceId }                         
                            </p>
                            <p>
                                <h3>Timestamp:</h3>
                                { event.timestamp }                         
                            </p>
                            <p>
                                <h3>Service Id:</h3>
                                { event.data }                      
                            </p>
                            <p>
                                <button className="btn btn-danger" onClick={ () => { removeEvent(selectedEventIndex) } } >Delete Event</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedEvent;