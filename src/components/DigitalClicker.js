import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    incrementer = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        }, console.log(this.state.timesClicked))
    }

    render(){
        return(
        <button onClick={this.incrementer}>{this.state.timesClicked}</button>
        )
    }
}

/* 
1. create class-based component
2. initial state with property, timesClicked: 0
3. button that shows this.state.timesClicked
4. create incrementer function
    1. use this.setState
    2. pass function that takes previousState
    3. new state is timesClicked: previousState.timesClicked + 1
    4. console.log the new state as well (2nd argument)
*/
