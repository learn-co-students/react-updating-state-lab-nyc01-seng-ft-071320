// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    //initial state property with timesClicked of 0
    state = {
        timesClicked: 0
    }

    //clickHandler to increment the timesClicked by 1
    clickHandler = () => {
        //use the setState method to change the state
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render () {
        return (
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;