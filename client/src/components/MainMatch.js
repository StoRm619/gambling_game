import React, { Component } from "react";
import API from "../utils/API.js";

class MainMatch extends Component {
    state = {
        teamA: "",
        teamB: ""
    }
    componentDidMount() {
        API.livedata(0).then(res => {
            console.log(res.data)
            this.setState({
                teamAName: res.data[2].opponents[0].opponent.name,
                teamBName: res.data[2].opponents[1].opponent.name,
                teamALogo: res.data[2].opponents[0].opponent.image_url,
                teamBLogo: res.data[2].opponents[1].opponent.image_url,
                gameNumber: res.data[2].number_of_games
            })
        }
        );
        
    }
    render() {
        return (<div className="col-sm-11 col-md-6 mainMatch">
            <div className="row mainTwitchPlayer">
                <iframe
                    src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                    height="100%"
                    width="100%"
                    frameBorder="0"
                    title="mainTwitch"
                    scrolling="no"
                    className="mainIframe">
                </iframe>
            </div>

            <div className="row mainGameInfo">
                <div className="teamInfo col-sm-5 col-md-5">
                    <div className="row">
                        <img alt="teamALogo" className="teamLogo logoA col-sm-4 col-md-4" src={this.state.teamALogo} />
                    </div>
                    <div className="row">
                        <div className="teamAName teamName col-sm-12">{this.state.teamAName}</div>
                    </div>
                </div>
                <div className="teamMiddle col-sm-2 col-md-2">
                    <div className="row mx-auto"  style={{width: 65}}>
                        BO{this.state.gameNumber}    
                    </div>
                    <div className="row"  style={{width: 130}}>
                        1.21 : 4.25
                    </div>
                    <div className="row mx-auto mainGameBet" style={{width: 65}}>
                        <button>Bet</button>
                    </div>
                </div>
                <div className="teamInfo col-sm-5 col-md-5">
                    <div className="row">
                        <img alt="teamBLogo" className="teamLogo logoB col-sm-4 col-md-4" src={this.state.teamBLogo} />
                    </div>
                    <div className="row">
                        <div className="teamBName teamName col-sm-12">{this.state.teamBName}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default MainMatch;