const initialState = {
    rightbarCollapsed: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case "COLLAPSE_RIGHTBAR":
            return {
                ...state,
                rightbarCollapsed: true
            };
        case "EXTEND_RIGHTBAR":
            return {
                ...state,
                rightbarCollapsed: false
            }
    }
    return state;
}