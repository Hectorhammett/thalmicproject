const initialState = {
    events: [],
    loading: false,
    error: false,
    errorMessage: null,
    selectedEvent: null,
    selectedEventIndex: null,
    saving: false,
    savingError: false,
    savingErrorMessage: null,
    eventToDelete: null,
    deletingEvent: false,
    deletingEventError: false,
    deletingEventErrorMessage: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case "LOADING_EVENTS":
            return {...state, loading: true};
        case "LOADED_EVENTS":
            return {...state,
                loading: false,
                events: action.payload,
                error: false,
                errorMessage: null
            };
        case "LOAD_EVENTS_FAILED":
            return {...state,
                loading: false,
                events: [],
                error: true,
                errorMessage: action.payload
            };
        case "SELECTED_EVENT":
            return {...state, selectedEvent: state.events[action.payload], selectedEventIndex: action.payload};
        case "SAVING_NEW_EVENT":
            return {
                ...state,
                saving: true,
                savingError: false,
                savingErrorMessange: null
            };
        case "ERROR_SAVING_NEW_EVENT":
            return{
                ...state,
                saving: false,
                savingError: true,
                savingErrorMessage: action.payload
            }
        case "SAVED_NEW_EVENT":
            let { events } = state;
            events.push(action.payload);
            return {
                ...state,
                saving: false,
                savingError: false,
                savingErrorMessange: null,
                events
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                saving: false,
                savingError: false,
                savingErrorMessange: null,
                eventToDelete: null,
                deletingEventError: false,
                deletingEventErrorMessage: null
            };
        case "DELETE_EVENT":
            return {
                ...state,
                eventToDelete: state.events[action.payload]
            };
        case "CANCEL_DELETE_EVENT":
            return {
                ...state,
                eventToDelete: null,
                deletingEventError: false,
                deletingEventErrorMessage: null
            };
        case "DELETING_EVENT":
            return {
                ...state,
                deletingEvent: true
            };
        case "DELETED_EVENT":
            const newState =  {
                ...state,
                deletingEvent: false,
                eventToDelete: null,
                deletingEventError: false,
                deletingEventErrorMessage: null,
                selectedEvent: null,
                selectedEventIndex: null
            };
            newState.events.splice(action.payload, 1);
            return newState;
        case "ERROR_DELETING_EVENT":
            return {
                ...state,
                deletingEvent: false,
                deletingEventError: true,
                deletingEventErrorMessage: action.payload
            };
        case "RESET_DELETE_ERROR":
            return {
                ...state,
                deletingEventError: false,
                deletingEventErrorMessage: null
            }
    }
    return state;
}