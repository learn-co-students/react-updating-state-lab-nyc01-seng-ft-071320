// Code YouTubeDebugger Component Here
import React from 'react';

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

    //Need to create Handlers for the bitrate and resolution

    bitHandler = () => {
        //use the setState method to change the above state
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.bitHandler} className="bitrate">BitRate</button>
                <button onClick={this.resHandler} className="resolution">Resolution</button>
            </div>
        )
    }


}

export default YouTubeDebugger;