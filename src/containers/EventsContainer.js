/**
 * Events Container
 * Container utilized to wire the EventsList component to the EventsList reducer
 * 
 * @author Hector Mendoza
 * @version 1.0
 * @since 5/1/2017
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { loadEvents, selectEvent } from '../actions/EventsActions';
import { collapseRightBar } from '../actions/RightBarActions';
import { openModal } from '../actions/ModalActions'

/* components */
import EventsList from '../components/EventsList';

class EventsContainer extends Component {

    /**
     * Method utilized to load the events from the DB when it's mounted
     */
    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        const { events, loading, error, errorMessage, loadEvents, selectEvent, selectedEvent, openModal, collapseRightBar } = this.props;
        return (
            <EventsList 
                events={ events }
                loading={ loading }
                error={ error }
                errorMessage={ errorMessage }
                loadEvents = { loadEvents }
                selectEvent = { selectEvent }
                selectedEvent = { selectedEvent }
                newEvent = { openModal }
                collapseRightBar = { collapseRightBar }
            />
        );
    }
}

function mapStateToProps(store){
    return {...store.events}
}

function bindDispatchToProps(dispatch){
    return bindActionCreators({loadEvents, selectEvent, openModal, collapseRightBar},dispatch);
}

export default connect(mapStateToProps,bindDispatchToProps)(EventsContainer);