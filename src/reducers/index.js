import { combineReducers } from 'redux';

/* Import all the needed reducers */
import EventsReducer from './EventsReducer';
import ModalReducer from './ModalReducer';
import RightBarReducer from './RightBarReducer';

export default combineReducers({
    events: EventsReducer,
    modal: ModalReducer,
    rightBar: RightBarReducer 
});

