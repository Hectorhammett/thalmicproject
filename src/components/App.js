/**
* Main component of the React Application
* This is sometimes called Layout component
*
* @author  Hector Mendoza
* @version 1.0
* @since   2017-04-30 
*/

import React, {Component} from 'react';

/* Containers */
import SelectedEventContainer from '../containers/SelectedEventContainer';
import MainPanelContainer from '../containers/MainPanelContainer';
import RightBarContainer from '../containers/RightBarContainer';
import EventsContainer from '../containers/EventsContainer';
import ModalContainer from '../containers/ModalContainer';

/* Components */
import MainContainer from './MainContainer';
import RightBar from './RightBar';
import AppBar from './AppBar';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
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