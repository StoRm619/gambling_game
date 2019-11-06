import React from "react";
import './chosenStream.css';
import StreamDetails from './StreamDetails.js';


function ChosenStream() {
    return (
        <div className="chosenTwitchPlayer">
            <iframe
                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                height="100%"
                width="100%"
                frameBorder="0"
                title="mainTwitch"
                scrolling="no"
                >
            </iframe>
            <div className="streamDetails">
            <StreamDetails />
            </div>
        </div>
    )
}

export default ChosenStream;