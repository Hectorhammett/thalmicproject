export function openModal(modal){
    return {
        type: "OPEN_MODAL",
        payload: "newEvent"
    }
}

export function closeModal(modal){
    return {
        type: "CLOSE_MODAL",
        payload: null
    }
}