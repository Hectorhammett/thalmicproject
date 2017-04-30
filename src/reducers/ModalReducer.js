const initalState = {
    modal: null,
    open: false,
    lock: false
}

export default (state = initalState, action) => {
    switch(action.type){
        case "OPEN_MODAL":
            return {
                ...state,
                modal: action.payload,
                open: true
            };
        case "CLOSE_MODAL":
            return {
                ...state,
                modal: null,
                open: false
            };
        case "LOCK_MODAL":
            return {
                ...state,
                lock: true
            };
        case "UNLOCK_MODAL":
            return {
                ...state,
                lock: false
            }
    }
    return state;
}