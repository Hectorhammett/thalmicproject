/**
* Events List Component
* This component it's a holder for all the individual Event component. The Event component is on this same file because it's not
* reusable, it's part of this same element, but abstracted to show different information
*
* @author  Hector Mendoza
* @version 1.0
* @since   2017-04-30 
*/
import { PHONE_SCREENS_BREAKPOINT } from '../constants';
import NoThumbnail from '../images/no-thumb.jpg';
import React, {Component} from 'react';

/* Components */
import Spinner from './Spinner';

/**
* Event Component
* This is a single element for the EventsList, which is the holder of multiple single Event Component
*/
class Event extends Component {

    /**
    * Event that handles the click on the event/
    *
    * @param  Without Paramos
    */
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


/**
* Event List component.
* This component encapsulates multiple single Event Componente, like an UL for an LIL
*/
class EventsList extends Component {

    /**
    * Function that returns an array of single Event components;
    *
    * @return      Array of Event components
    */
    renderList(){
        const { events, selectEvent, selectedEvent, collapseRightBar } = this.props;
        return events.map((event, index) => {

            let active = ( selectedEvent === null ) ? false         :
                         ( selectedEvent.id === event.id ) ? true   : 
                         false;

            return (
                <Event onClick={ () => { selectEvent(index) } } key={ event.id } active={ active } collapseRightBar={ collapseRightBar }>
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
            )
        })
    }


    /**
    * Function that renders the main view that will be returned
    *
    * @return      Div.events-list
    */
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