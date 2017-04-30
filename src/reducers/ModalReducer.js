const initalState = {
    modal: null,
    open: false
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
    }
    return state;
}