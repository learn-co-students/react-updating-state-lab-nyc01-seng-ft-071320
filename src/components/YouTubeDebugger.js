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

    bitrateHandler = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionHandler = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p' 
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.bitrateHandler} className="bitrate">Bitrate</button>
                <button onClick={this.resolutionHandler} className="resolution">Resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger