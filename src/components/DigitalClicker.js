import React from 'react';


export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }
 
    clickHandler = () => {
        let newClicks = this.state.timesClicked += 1
        this.setState((previousState) => ({
            timesClicked: newClicks
            })
        )
    }
    
    render() {
        return (
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }

}