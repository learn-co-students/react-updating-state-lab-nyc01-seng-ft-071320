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

   bitrateClickHandler = () => {
      this.setState({
         settings: {
            ...this.state.settings,
               bitrate: 12
            }
         }
      )
   }

   resolutionClickHandler = () => {
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
            <div>
               <button className="bitrate" onClick={this.bitrateClickHandler}>bitrate: {this.state.settings.bitrate}</button>
            </div>
            <div>
               <button className="resolution" onClick={this.resolutionClickHandler}>resolution: {this.state.settings.video.resolution}</button>
            </div>
         </div>
      )
   }
}

export default YouTubeDebugger
