import React, {Component} from 'react';

class SelectedEvent extends Component {
    render() {
        const { event } = this.props; 
        return (
            <div className="panel">
                <h1>{ event.title }</h1>
                <p>{ event.author }</p>
            </div>
        );
    }
}

export default SelectedEvent;