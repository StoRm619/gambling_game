import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import ChosenStream from '../components/ChosenStream/ChosenStream.js';
import Store from '../components/Store/Store.js';
import Dashboard from '../components/Dashboard/Dashboard.js';
import BetTable from '../components/Bet Table/BetTable';
import { Jumbotron, Container } from 'reactstrap';
import '../pages/css/matchBoard.css';
import API from './../utils/API';
var moment = require('moment');


// const data = {
//   eventName: "Mdl europe season 32 2019",
//   scheduledAt: "2019-11-07T15:00:00Z",
//   teamALogo:
//     "https://cdn.pandascore.co/images/team/image/3288/600px_virtus.pro_2019.png",
//   teamBLogo: "https://cdn.pandascore.co/images/team/image/125785/7718.png",
//   teamAName: "Virtus.pro",
//   teamBName: "Movistar Riders"
// };

//  function retrieveStorage() { JSON.parse(localStorage.getItem("matchID")),
//     this.setState({ matchID: "matchID" });
//     console.log(matchID)};
class MatchDash extends Component {
  state = {
    username: "",
    email: "",
    chronos: "",
    inputValue: "",
    userBetA: 0,
    poolA: 0,
    userBetB: 0,
    poolB: 0,
    poolTotal: 0,
    curTime: moment().format('h:mm a'),
  };

  componentDidMount() {

    API.getAllUsers().then(res => {
      for (let i = 0; i < res.data.length; i++) {
        this.setState({
          poolA: this.state.poolA + res.data[i].userBetA,
          poolB: this.state.poolB + res.data[i].userBetB,
          poolTotal: this.state.poolTotal + res.data[i].userBetA + res.data[i].userBetB,
          inputValue: ""
        })
      }
    })
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        chronos: res.data.chronos,
        userBetA: res.data.userBetA,
        userBetB: res.data.userBetB
      })
    })
    API.livedata(0).then(res => {
      console.log(res.data)
      this.setState({
        teamAName: res.data[0].opponents[0].opponent.name,
        teamBName: res.data[0].opponents[1].opponent.name,
        teamALogo: res.data[0].opponents[0].opponent.image_url,
        teamBLogo: res.data[0].opponents[1].opponent.image_url,
        gameNumber: res.data[0].number_of_games,
        matchName: res.data[0].name,
        scoreA: res.data[0].results[0].score,
        scoreB: res.data[0].results[1].score,
        prizePool: res.data[0].tournament.prizepool
      });
  }
  );

  }

  render() {

      return (
        <div className="matchDash">
          <div>
            <Jumbotron fluid>
              <Container fluid>
      <h1 className="display-3">{this.state.matchName}</h1>
                <p className="lead">
                  <strong>
                    {this.state.teamAName} | VS | {this.state.teamBName}
                  </strong>
                </p>
              </Container>
            </Jumbotron>
          </div>
          <div className="dashboardPosition">
            <div className="chosenTeamDetails"></div>
            <ChosenStream />
            <BetTable />
            <div className="chat">
              <Store user={this.props.user}>
                <Dashboard />
              </Store>
            </div>
          </div>
        </div>
      );

    };

  }

  export default withAuth(MatchDash);
