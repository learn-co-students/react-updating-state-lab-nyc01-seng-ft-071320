import React from 'react'

class DigitalClicker extends React.Component {

   state = {
      timesClicked: 0
   }

   click=() => {
      let clicked = this.state.timesClicked+1
      this.setState({ timesClicked: clicked})
   }

   render() {
      console.log(this.state.timesClicked)
      return <button onClick={this.click}>{this.state.timesClicked}</button>
   }
}

export default DigitalClicker
