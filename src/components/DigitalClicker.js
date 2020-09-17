import React from 'react';

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    incrementClick = (e) => {
        let initialClick = this.state.timesClicked
        this.setState({ timesClicked: initialClick + 1})
    }

    render() {
        return (
            <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker