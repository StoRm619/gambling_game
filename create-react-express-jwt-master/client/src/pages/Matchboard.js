import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import ChosenStream from "../components/ChosenStream/ChosenStream.js";
import Store from "../components/Store/Store.js";
import Dashboard from "../components/Dashboard/Dashboard.js";
import { Jumbotron, Container } from "reactstrap";
import "../pages/css/matchBoard.css";

const data = {
  eventName: "Mdl europe season 32 2019",
  scheduledAt: "2019-11-07T15:00:00Z",
  teamALogo:
    "https://cdn.pandascore.co/images/team/image/3288/600px_virtus.pro_2019.png",
  teamBLogo: "https://cdn.pandascore.co/images/team/image/125785/7718.png",
  teamAName: "Virtus.pro",
  teamBName: "Movistar Riders"
};

class MatchDash extends Component {
  render() {
    // const { data } = this.props.location;
    // console.log(JSON.stringify(data))
    return (
      
            <div className="matchDash">
            <div>
            <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">{ data.eventName }</h1>
            <p className="lead"><strong>{data.teamAName} | VS | {data.teamBName}</strong></p>
            </Container>
            </Jumbotron>
            </div>
            <div className="dashboardPosition">
            <div className="chosenTeamDetails">
            
            </div>
            <ChosenStream />
            <div className="chat">
            <Store>
            <Dashboard />
            </Store>
            </div>
            </div>
            </div>
            );
  }
}

export default withAuth(MatchDash);
