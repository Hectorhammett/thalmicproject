import React, {Component} from 'react';

/* This event element is only used in conjuction with the list, that's why they're on the same file */
class Event extends Component {
    render() {
        const { text, onClick, children, active, className } = this.props;
        return (
            <div className={ "event" + ((active) ? " active" : "") + ` ${className}` } onClick={ onClick }>{text}
                { children }
            </div>
        );
    }
}

class EventsList extends Component {
    renderList(){
        const { events, selectEvent, selectedEvent } = this.props;
        return events.map((event, index) => {
            let active = ( selectedEvent === null ) ? false         :
                         ( selectedEvent.id === event.id ) ? true   : 
                         false;

            return <Event onClick={ () => { selectEvent(index) } } key={ event.id } active={ active }> { event.id } </Event>
        })
    }

    renderView(){
        const { events, loading, error, errorMessage, loadEvents, newEvent } = this.props;
        
        let list = [];

        if(loading)
            return <p>loading...</p>
        if(error)
            return <p>{ errorMessage.toString() }</p>
        if( events.length > 0 )
            list = this.renderList()

        return (
            <div className="events-list">
                <Event onClick={ () => { newEvent("newEvent") } }>
                    + Add Event
                </Event>
                { list }
            </div>
        );
    }

    render() {
        return this.renderView();
    }
}

export default EventsList;