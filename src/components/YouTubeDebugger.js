import React from 'react';


export default class YouTubeDebugger extends React.Component {

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


    bitRateHandler = () => {
        this.setState((previousState) => ({
            settings: {...this.state.settings, bitrate: 12}
        }))
    }


    resolutionHandler = () => {
        this.setState((previousState) => ({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        }))
    }

    render() {
        // console.log(this.state)
        return (
            <div>
            <button className="bitrate" onClick={this.bitRateHandler}>Adjust bit rate</button>
            <button className="resolution" onClick={this.resolutionHandler}>Adjust resolution</button>
            </div>
        )
    }



}