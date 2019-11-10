import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              // teamAName: res.data[0].opponents[0].opponent.name,
              // teamBName: res.data[0].opponents[1].opponent.name,
              // teamALogo: res.data[0].opponents[0].opponent.image_url,
              // teamBLogo: res.data[0].opponents[1].opponent.image_url,
              gameNumber: res.data[0].number_of_games,
              matchName: res.data[0].name,
              // scoreA: res.data[0].results[0].score,
              // scoreB: res.data[0].results[1].score,
              // prizePool: res.data[0].tournament.prizepool
            });
        }
        );
        
    }
    render() {
        return (
          <div className="col-sm-11 col-md-6 mainMatch">
            <div className="row mainTwitchPlayer">
              <iframe
                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                height="100%"
                width="100%"
                frameBorder="0"
                title="mainTwitch"
                scrolling="no"
                className="mainIframe"
              ></iframe>
            </div>

            <div className="row mainGameInfo">
              <div className="teamInfo col-sm-5 col-md-5">
                <div className="row">
                  <img
                    alt="teamALogo"
                    className="teamLogo logoA col-sm-4 col-md-4"
                    src={this.state.teamALogo}
                  />
                </div>
                <div className="row">
                  <div className="teamAName teamName col-sm-12">
                    Score: {this.state.scoreA}
                  </div>
                </div>
              </div>
              <div className="teamMiddle col-sm-2 col-md-2" id="middleInfo">
                <div
                  className="row mx-auto"
                  id="matchName"
                  style={{ width: 400 }}
                >
                  {this.state.teamAName}{" "}
                  <img
                    src="https://image.freepik.com/free-vector/versus-background-with-neon-style_23-2147687490.jpg"
                    alt="VS"
                    width="25"
                    height="25"
                    id="vsMain"
                  ></img>{" "}
                  {this.state.teamBName}
                </div>

                <div className="row mx-auto mainGameBet" style={{ width: 65 }}>
                  <Link id="mainBetBtn" to="/matchDash" className="btn">
                    Bet
                  </Link>
                </div>
              </div>
              <div className="teamInfo col-sm-5 col-md-5">
                <div className="row">
                  <img
                    alt="teamBLogo"
                    className="teamLogo logoB col-sm-4 col-md-4"
                    src={this.state.teamBLogo}
                  />
                </div>
                <div className="row">
                  <div className="teamBName teamName col-sm-12">
                    Score: {this.state.scoreA}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default MainMatch;