import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    let newTimesClicked = this.state.timesClicked + 1
    this.setState({
        timesClicked: newTimesClicked
    })
  }

  render(){
    return (
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;