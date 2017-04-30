import React, {Component} from 'react';

import NoThumbnail from '../images/no-thumb.jpg';

class SelectedEvent extends Component {
    render() {
        let { event } = this.props;
        event.url = "test";
        console.log(this.props.event);
        return (
            <div className="panel">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={NoThumbnail} />
                        </div>
                        <div className="col-sm-8">
                            <h1>Event Title</h1>
                            <p>{ event.title }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedEvent;