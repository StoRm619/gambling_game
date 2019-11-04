import React from "react";
import './chosenStream.css';

function ChosenStream() {
    return (
        <div className="chosenTwitchPlayer">
            <iframe
                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                height="100%"
                width="100%"
                frameBorder="0"
                title="mainTwitch"
                scrolling="no">
            </iframe>
            <div className="streamDetails">

            
            </div>
        </div>
    )
}

export default ChosenStream;