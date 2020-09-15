import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor() {
        super();
    
        this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        };
      }

      fixBitrate = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
      };
    
      fixResolution= () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
        }})
    };

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.fixBitrate}>Bitrate</button>
                <button className="resolution" onClick={this.fixResolution}>Resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger