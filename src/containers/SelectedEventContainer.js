import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import SelectedEvent from '../components/selectedEvent';

class SelectedEventContainer extends Component {
    render() {
        const { event } = this.props;
        let element = <h1 className="text-center text-muted"> No event selected </h1>;
        if(event !== null)
            element = <SelectedEvent event={event}/>;
        return element;
    }
}

function mapStateToProps(store){
    return {
        event: store.events.selectedEvent
    };
}
export default connect(mapStateToProps)(SelectedEventContainer);