import React from "react";

function MainMatch() {
    return (<div className="col-sm-11 col-md-6 mainMatch">
        <div className="row mainTwitchPlayer">
            <iframe
                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                height="100%"
                width="100%"
                frameBorder="0"
                title="mainTwitch"
                scrolling="no">
            </iframe>
        </div>

        <div className="row">
            <div className="mainMatchInfo">
                <table className="table table-dark">
                    <tbody>
                        <tr>
                            <td>Event name</td>
                            <td>A x B</td>
                            <td>2 x 1</td>
                            <td className="mainTableLink">Link</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default MainMatch;