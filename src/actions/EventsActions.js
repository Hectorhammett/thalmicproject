import axios from 'axios';
let root = "http://127.0.0.1:3000";

function loadingEvents(){
    return {
        type: "LOADING_EVENTS"
    }
}

function loadedEvents(events){
    return {
        type: "LOADED_EVENTS",
        payload: events
    }
}

function errorLoadingEvents(err){
    return {
        type: "LOAD_EVENTS_FAILED",
        payload: err
    }
}

export function loadEvents(){
    return function(dispatch){
        dispatch(loadingEvents());
        axios.get(`${root}/posts`).then((response) => {
            dispatch(loadedEvents(response.data));
        })
        .catch((err) => {
            dispatch(errorLoadingEvents(err));
        })
    }
}

export function selectEvent(index){
    return {
        type: "SELECTED_EVENT",
        payload: index
    }
}

export function newEvent(){
    return {
        type: "OPEN_MODAL_EVENTS"
    }
}

