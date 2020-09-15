import React from 'react'

export default class YouTubeDebugger extends React.Component {
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


    toggleBitrate = () => {
        this.setState(previousState => {
            if(previousState.settings.bitrate === 8){
                return {
                    settings: {
                        ...this.state.settings,
                        bitrate: 12
                    }
                }
            } else {
                return {
                    settings: {
                        ...this.state.settings,
                        bitrate: 8
                    }
                }
            }
            
        })
    }

    toggleResolution = () => {
        this.setState(previousState => {
            if(previousState.settings.video.resolution === '1080p'){
                return {
                    settings: {
                        ...this.state.settings,
                        video: {
                            ...this.state.settings.video,
                            resolution: '720p'
                        }
                    }
                }
            } else {
                return {
                    settings: {
                    ...this.state.settings,
                        video: {
                            ...this.state.settings.video,
                            resolution: '1080p'
                        }
                    }
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.toggleBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.toggleResolution}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }



}


/*
1. create component
2. add initial state
3. create a button with className='bitrate'
    1. add onClick: clicking changes this.state.settings.bitrate to 12
        create function toggleBitrate
            1. use this.setState(previousState => {return{}})
            2. if previousState.settings.bitrate === 8:  settings: {...this.state.settings, bitrate: 12}
                else settings: {...this.state.settings, bitrate: 8}
4. create button with className='resolution'
    1. add onClick: change settings.video.resolution to '720p'
        create function toggleResolution
            1. use this.setState(previousState => {return{}})
            2. if previousState.settings.video.resolution === '1080p': settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}
                else settings: settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '1080p'}}
*/