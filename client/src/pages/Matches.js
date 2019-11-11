import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import MatchCard from "../components/MatchCard/Matchcard";
import Wrapper from "../components/Wrapper";
import { Jumbotron, Container } from "reactstrap";
import API from "../utils/API.js";
import "./css/matches.css";
var moment = require("moment");

class MatchesBoard extends Component {
  state = {
    teamA: "",
    teamB: "",
    matches: []
  };

  componentDidMount() {
    API.livedata().then(res => {
      console.log(res.data);
      this.setState({
        matches: res.data
      });
    });
  }

  render() {
    let questionMark = "https://img.icons8.com/nolan/64/000000/help--v2.png";
    return (
      <div className="matches">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Scheduled Matches</h1>
              <p className="lead">
                <strong>Browse the Weekly Tournament Schedules Below</strong>
              </p>
            </Container>
          </Jumbotron>
        </div>
        <div className="matchesBox">
          <Wrapper>
            {this.state.matches.map(match => (
              <MatchCard
                key={match.id}
                eventName={match.serie.full_name}
                scheduledAt={
                  moment(match.scheduled_at).format("h:mm a") || "TBD"
                }
                teamALogo={
                  match.opponents[0].opponent.image_url
                    ? match.opponents[0].opponent.image_url
                    : questionMark
                }
                teamBLogo={
                  match.opponents[1].opponent.image_url
                    ? match.opponents[1].opponent.image_url
                    : questionMark
                }
                teamAName={match.opponents[0].opponent.name || "TBD"}
                teamBName={match.opponents[1].opponent.name || "TBD"}
                matchName={match.name || "TBD"}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default withAuth(MatchesBoard);
