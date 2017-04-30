import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { loadEvents, selectEvent } from '../actions/EventsActions';
import { openModal } from '../actions/ModalActions';

/* components */
import EventsList from '../components/EventsList';

class EventsContainer extends Component {
    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        const { events, loading, error, errorMessage, loadEvents, selectEvent, selectedEvent, openModal } = this.props;
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
            />
        );
    }
}

function mapStateToProps(store){
    return {...store.events}
}

function bindDispatchToProps(dispatch){
    return bindActionCreators({loadEvents, selectEvent, openModal},dispatch);
}

export default connect(mapStateToProps,bindDispatchToProps)(EventsContainer);