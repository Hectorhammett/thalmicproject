let initialState = {
    events: [],
    loading: false,
    error: false,
    errorMessage: null,
    selectedEvent: null,
    newEvent: false
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
            return {...state, selectedEvent: state.events[action.payload]};
        case "OPEN_MODAL_EVENTS":
            return {...state, newEvent: true }
        case "CLOSE_MODAL_EVENTS":
            return {...state, newEvent: false }
    }
    return state;
}