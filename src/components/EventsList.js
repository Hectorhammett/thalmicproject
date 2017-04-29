import React, {Component} from 'react';

/* This event element is only used in conjuction with the list, that's why they're on the same file */
class Event extends Component {
    render() {
        console.log(this.props);
        const { event, selectEvent, index, active } = this.props;
        return (
            <div className={"event " + ( active ? 'active' : "" )} key={event.id} onClick={ () => { selectEvent(index) } }>{event.title}</div>
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

            return <Event event={event} selectEvent={selectEvent} key={ event.id } index={ index } active={ active }/>
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
        return this.renderView();
    }
}

export default EventsList;