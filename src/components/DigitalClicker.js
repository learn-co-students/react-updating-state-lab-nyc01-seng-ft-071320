import React from 'react';

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        this.setState((currentState) => ({ timesClicked: currentState.timesClicked + 1}))
    }

    render() {
        return(
            <div> 
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button> 
            </div>
        )
    }

}