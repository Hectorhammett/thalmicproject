/**
 * Selected Event Container
 * Container used to wire the store to the Selected Event Component
 */

import { bindActionCreators } from 'redux';
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Components */
import SelectedEvent from '../components/selectedEvent';

/* Actions */
import { removeEvent } from '../actions/EventsActions';
import { openModal } from '../actions/ModalActions';

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