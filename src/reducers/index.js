import { combineReducers } from 'redux';

/* Import all the needed reducers */
import EventsReducer from './EventsReducer';

export default combineReducers({
    events: EventsReducer
});

