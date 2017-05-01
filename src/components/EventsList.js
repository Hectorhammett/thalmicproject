import React, {Component} from 'react';
import { PHONE_SCREENS_BREAKPOINT } from '../constants';
import NoThumbnail from '../images/no-thumb.jpg';

/* Components */
import Spinner from './Spinner';

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

            return <Event onClick={ () => { selectEvent(index) } } key={ event.id } active={ active } collapseRightBar={ collapseRightBar }>
                <div className="row">
                    <div className="col-xs-2">
                        <img className="img-responsive event-thumb" src={ ( event.icon  ? event.icon : NoThumbnail ) } />
                    </div>
                    <div className="col-xs-10">
                        <div className="row">
                            <div className="col-xs-12 ellipsis">
                                <strong>{ event.title } </strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 ellipsis">
                                { event.type } 
                            </div>
                        </div>
                    </div>
                </div>
            </Event>
        })
    }

    renderView(){
        const { events, loading, error, errorMessage, loadEvents, newEvent } = this.props;
        
        let list = [];

        if(loading)
            return <Spinner />
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