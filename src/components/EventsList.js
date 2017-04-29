import React, {Component} from 'react';

/* This event element is only used in conjuction with the list, that's why they're on the same file */
class Event extends Component {
    render() {
        const { event, selectEvent, index } = this.props;
        return (
            <div className="event" key={event.id} onClick={ () => { selectEvent(index) } }>{event.title}</div>
        );
    }
}

class EventsList extends Component {
    renderList(){
        const {events, selectEvent} = this.props;
        return events.map((event, index) => {
            return <Event event={event} selectEvent={selectEvent} key={ event.id } index={ index }/>
        })
    }

    renderView(){
        const { events, loading, error, errorMessage, loadEvents } = this.props;
        if(loading)
            return <p>loading...</p>
        if(error)
            return <p>{ errorMessage.toString() }</p>
        let list = <p>No Events Loaded</p>;
        if( events.length > 0 )
            list = <div className="events-list">{ this.renderList() }</div>
        return list;
    }

    render() {
        console.log(this.props);
        return this.renderView();
    }
}

export default EventsList;