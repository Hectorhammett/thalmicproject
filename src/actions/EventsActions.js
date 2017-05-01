import axios from 'axios';
import { closeModal, openModal, lockModal, unlockModal } from './ModalActions';

let root = "https://forgetful-elephant.herokuapp.com";

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
        axios.get(`${root}/events`).then((response) => {
            dispatch(loadedEvents(response.data));
            dispatch(closeModal());
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

export function saveNewEvent(newEvent){
    return function(dispatch){
        axios.post(`${root}/events`,newEvent).then((response) => {
            dispatch(savedNewEvent(response.data));
            dispatch(unlockModal());
            dispatch(closeModal());
        })
        .catch((err) => {
            dispatch(errorSavingNewEvent(err.toString()));
        })
    }
}

export function savingNewEvent(){
    return function(dispatch){
        dispatch(lockModal());
        dispatch({
            type: "SAVING_NEW_EVENT"
        });
    }
}

export function errorSavingNewEvent(err){
    return function(dispatch){
        dispatch({
            type: "ERROR_SAVING_NEW_EVENT",
            payload: err
        });
        dispatch(unlockModal());
    }
}

function savedNewEvent(newEvent){
    return {
        type: "SAVED_NEW_EVENT",
        payload: newEvent
    }
}

function deleteEventPrep(event){
    return{
        type: "DELETE_EVENT",
        payload: event
    }
}

export function cancelDeleteEvent(){
    return function(dispatch){
        dispatch({type:"CANCEL_DELETE_EVENT"});
        dispatch(closeModal());
    }
}

export function removeEvent(event){
    return function(dispatch){
        dispatch(deleteEventPrep(event));
        dispatch(openModal("deleteEvent"));
    }
}

function deletingEvent(){
    return {
        type: "DELETING_EVENT"
    }
}

function deletedEvent(index){
    return {
        type: "DELETED_EVENT",
        payload: index
    }
}

function errorDeletingEvent(err){
    return {
        type: "ERROR_DELETING_EVENT",
        payload: err
    }
}

export function confirmDeleteEvent(index,event){
    return function(dispatch){
        dispatch(lockModal());
        dispatch(deletingEvent());
        axios.delete(`${root}/events/${event.id}`).then((response) => {
            dispatch(unlockModal());
            dispatch(closeModal());
            dispatch(deletedEvent(index));
        })
        .catch((err) => {
            dispatch(errorDeletingEvent(err.toString()));
            dispatch(unlockModal());
        })
    }
}

export function verifyImageUrl(){
    return function(dispatch){
        dispatch(lockModal());
        dispatch( {
            type: "VERIFYING_IMAGE_URL"
        });
    }
}