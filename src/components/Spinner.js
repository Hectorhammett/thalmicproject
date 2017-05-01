import React, {Component} from 'react';
import '../css/spinner.css';

class Spinner extends Component {
    render() {
        const { inline } = this.props;
        return (
            <div className={ "spinner" + ( inline ? " inline" : "") }>
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        );
    }
}

export default Spinner;