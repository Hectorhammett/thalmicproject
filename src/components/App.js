import React, {Component} from 'react';

/* Containers */
import EventsContainer from '../containers/EventsContainer';
import SelectedEventContainer from '../containers/SelectedEventContainer';

/* Components */
import AppBar from './AppBar';
import MainContainer from './MainContainer';
import RightBar from './RightBar';

class App extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <MainContainer >
                    <SelectedEventContainer />
                </MainContainer>
                <RightBar>
                    <EventsContainer />
                </RightBar>
            </div>
        );
    }
}

export default App;