import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { loadEvents, selectEvent } from '../actions/EventsActions.js';

/* components */
import EventsList from '../components/EventsList';

class EventsContainer extends Component {
    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        console.log(this.props);
        const { events, loading, error, errorMessage, loadEvents, selectEvent } = this.props;
        return (
            <EventsList 
                events={ events }
                loading={ loading }
                error={ error }
                errorMessage={ errorMessage }
                loadEvents = { loadEvents }
                selectEvent = { selectEvent }
            />
        );
    }
}

function mapStateToProps(store){
    return {...store.events}
}

function bindDispatchToProps(dispatch){
    return bindActionCreators({loadEvents, selectEvent},dispatch);
}

export default connect(mapStateToProps,bindDispatchToProps)(EventsContainer);