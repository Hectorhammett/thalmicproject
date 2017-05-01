import React, {Component} from 'react';
import { PHONE_SCREENS_BREAKPOINT } from '../constants';

/* This event element is only used in conjuction with the list, that's why they're on the same file */
class Event extends Component {
    handleClick(){
        const { onClick, collapseRightBar } = this.props;
        onClick();
        if(window.innerWidth < PHONE_SCREENS_BREAKPOINT && (typeof collapseRightBar === 'function'))
            collapseRightBar();
    }

    render() {
        const { text, children, active, className } = this.props;
        return (
            <div className={ "event" + ((active) ? " active" : "") + ` ${className}` } onClick={ this.handleClick.bind(this) }>{text}
                { children }
            </div>
        );
    }
}

class EventsList extends Component {
    renderList(){
        const { events, selectEvent, selectedEvent, collapseRightBar } = this.props;
        return events.map((event, index) => {
            let active = ( selectedEvent === null ) ? false         :
                         ( selectedEvent.id === event.id ) ? true   : 
                         false;

            return <Event onClick={ () => { selectEvent(index) } } key={ event.id } active={ active } collapseRightBar={ collapseRightBar }> { event.id } </Event>
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