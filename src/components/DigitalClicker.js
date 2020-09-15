import React from 'react'

class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  clickHandle = () => {
    this.setState(prevState => {
      return {
        timesClicked: prevState.timesClicked + 1
      }
    })
  }
  
  render() {
    return(
      <button onClick={this.clickHandle}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
