import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import SelectedEvent from '../components/selectedEvent';

/* Actions */
import { openModal } from '../actions/ModalActions';
import { removeEvent } from '../actions/EventsActions';

class SelectedEventContainer extends Component {
    render() {
        const { event, openModal, removeEvent, selectedEventIndex } = this.props;
        let element = <h1 className="text-center text-muted"> No event selected </h1>;
        if(event !== null)
            element = <SelectedEvent event={event} removeEvent={ removeEvent } selectedEventIndex={ selectedEventIndex }/>;
        return element;
    }
}

function mapStateToProps(store){
    return {
        event: store.events.selectedEvent,
        selectedEventIndex: store.events.selectedEventIndex
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        removeEvent, openModal
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectedEventContainer);