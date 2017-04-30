import React, {Component} from 'react';

import NoThumbnail from '../images/no-thumb.jpg';

class SelectedEvent extends Component {
    render() {
        let { event, removeEvent } = this.props;
        event.url = "test";
        
        return (
            <div className="panel">
                <div className="panel-header">
                    <h1>{ event.title }</h1>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 text-center-xs">
                            <img src={NoThumbnail} className="img-responsive event-thumbnail"/>
                        </div>
                        <div className="col-sm-8">
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
                                <button className="btn btn-danger" onClick={ () => { removeEvent(event) } } >Delete Event</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedEvent;