import React, {Component} from 'react';

/* Containers */
import EventsContainer from '../containers/EventsContainer';
import SelectedEventContainer from '../containers/SelectedEventContainer';
import ModalContainer from '../containers/ModalContainer';
import RightBarContainer from '../containers/RightBarContainer';
import MainPanelContainer from '../containers/MainPanelContainer';

/* Components */
import AppBar from './AppBar';
import MainContainer from './MainContainer';
import RightBar from './RightBar';

class App extends Component {
    render() {
        return (
            <div>
                <ModalContainer />
                <AppBar />
                <MainPanelContainer>
                    <SelectedEventContainer />
                </MainPanelContainer>
                <RightBarContainer>
                    <EventsContainer />
                </RightBarContainer>
            </div>
        );
    }
}

export default App;