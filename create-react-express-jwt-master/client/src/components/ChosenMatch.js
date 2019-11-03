import React from "react";

function ChosenMatch() {
    return (<div className="col-sm-11 col-md-6 chosenMatch">
        <div className="row chosenTwitchPlayer">
            <iframe
                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                height="100%"
                width="100%"
                frameBorder="0"
                title="chosenTwitch"
                scrolling="no">
            </iframe>
        </div>

        <div className="row">
            <div className="chosenMatchInfo">
                <table className="table table-dark chosenMatchTable">
                    <tbody>
                        <tr>
                            <td>Event name</td>
                            <td>A x B</td>
                            <td>2 x 1</td>
                            <td className="chosenTableLink">Link</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default ChosenMatch;