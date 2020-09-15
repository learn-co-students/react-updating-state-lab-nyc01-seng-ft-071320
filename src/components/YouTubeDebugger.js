import React from 'react'

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  clickHandle1 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  clickHandle2 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.clickHandle1} className="bitrate">Bitrate</button>
        <button onClick={this.clickHandle2} className="resolution">Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
