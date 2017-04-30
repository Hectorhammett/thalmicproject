const initialState = {
    events: [],
    loading: false,
    error: false,
    errorMessage: null,
    selectedEvent: null,
    saving: false,
    savingError: false,
    savingErrorMessage: null
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
            return {
                ...state,
                saving: false,
                savingError: false,
                savingErrorMessange: null,
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                saving: false,
                savingError: false,
                savingErrorMessange: null,
            }
    }
    return state;
}