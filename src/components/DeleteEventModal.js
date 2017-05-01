import React, {Component} from 'react';
import Spinner from "./Spinner";

class componentName extends Component {
    render() {
        const { eventToDelete, cancelDeleteEvent, confirmDeleteEvent, deletingEvent, deletingEventError, deletingEventErrorMessage, selectedEventIndex } = this.props; 
        console.log("from modal",this.props.selectedEventIndex);

        let error = null;
        if(deletingEventError)
            error = <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-danger">
                                { deletingEventErrorMessage }
                            </div>
                        </div>
                    </div>

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 text-center modal-info-holder">
                        <i className="fa fa-exclamation-triangle fa-5x text-danger" aria-hidden="true"></i>
                        <br/>
                        <h2>You're about to delete the following event:</h2>
                        <h3>{ eventToDelete.title }</h3>
                        This action <bold>cannot</bold> be undone.
                    </div>
                </div>
                <div className="row">
                    {
                        (deletingEvent) ?
                            <Spinner />
                        :
                            <div className="col-sm-12 text-center delete-modal-buttons" style={{marginTop: "15px"}}>
                                <button className="btn btn-danger" onClick={ () => { confirmDeleteEvent(selectedEventIndex, eventToDelete) }} disabled={ deletingEvent }>Yes, Delete</button>
                                <button className="btn btn-default" onClick={ cancelDeleteEvent } disabled={ deletingEvent }>No, don't delete</button>
                            </div>
                    }
                </div>
                { error }
            </div>
        );
    }
}

export default componentName;