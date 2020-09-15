// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    changeBitrate = () => {

        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
        })
    }

    changeRes = () => {

        this.setState({
            settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
            }
        })
    }

    render(){
        return ( 
        <React.Fragment>
            <button className="bitrate" onClick={this.changeBitrate}>bitrate</button>
            <button className="resolution" onClick={this.changeRes}>resolution</button>
        </React.Fragment>
        )
    }
}

export default YouTubeDebugger