import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import ChosenStream from "../components/ChosenStream/ChosenStream.js";
import Store from "../components/Store/Store.js";
import Dashboard from "../components/Dashboard/Dashboard.js";
import { Jumbotron, Container } from "reactstrap";
import "../pages/css/matchBoard.css";
import API from "./../utils/API";
var moment = require("moment");

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
    curTime: moment().format("h:mm a"),

  };

  componentDidMount() {
    API.getAllUsers().then(res => {
      //console.log(res.data)
      for (let i = 0; i < res.data.length; i++) {
        this.setState({
          poolA: this.state.poolA + res.data[i].userBetA,
          poolB: this.state.poolB + res.data[i].userBetB,
          poolTotal:
            this.state.poolTotal + res.data[i].userBetA + res.data[i].userBetB,
          inputValue: ""
        });
      }
    });
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        chronos: res.data.chronos,
        userBetA: res.data.userBetA,
        userBetB: res.data.userBetB
      });
    });
  }
  handleGameLogic = event => {
    event.preventDefault();
    // change to a modal and attach to axios
    alert(
      `You won ${Math.floor(
        (this.state.userBetA / this.state.poolA) * this.state.poolTotal
      )} chronos from betting on team A.`
    );

    this.setState({
      chronos:
        this.state.chronos +
        Math.floor(
          (this.state.userBetA / this.state.poolA) * this.state.poolTotal
        ),
      userBetA: 0,
      poolA: 0
    });

    API.getUser(this.props.user.id).then(res => {
      API.updateUser(
        this.state.username,
        this.state.chronos,
        this.state.userBetA
      );
    });
  };

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleFormSubmit = event => {
    console.log(
      document.querySelector('input[name="chooseTeam"]:checked').value
    );
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (
      document.querySelector('input[name="chooseTeam"]:checked').value ===
      "TeamA"
    ) {
      this.setState({
        chronos: this.state.chronos - parseInt(this.state.inputValue),
        userBetA: this.state.userBetA + parseInt(this.state.inputValue),
        poolA: this.state.poolA + parseInt(this.state.inputValue),
        poolTotal: this.state.poolTotal + parseInt(this.state.inputValue)
      });

      API.getUser(this.props.user.id).then(res => {
        API.updateUser(
          this.state.username,
          this.state.chronos,
          this.state.userBetA
        );
      });
    } else if (
      document.querySelector('input[name="chooseTeam"]:checked').value ===
      "TeamB"
    ) {
      this.setState({
        chronos: this.state.chronos - parseInt(this.state.inputValue),
        userBetB: this.state.userBetB + parseInt(this.state.inputValue),
        poolB: this.state.poolB + parseInt(this.state.inputValue),
        poolTotal: this.state.poolTotal + parseInt(this.state.inputValue)
      });

      API.getUser(this.props.user.id).then(res => {
        API.updateUserB(
          this.state.username,
          this.state.chronos,
          this.state.userBetB
        );
      });
    }
  };

  render() {
      const { data } = this.props.location
    return (
      <div className="matchDash">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Event Name</h1>
              <p className="lead">
                <strong>Team A vs Team B</strong>
              </p>
            </Container>
           </Jumbotron>
        </div>
        <div className="dashboardPosition">
          <div className="chosenTeamDetails"></div>
          <ChosenStream />
          <div className="chat">
            <Store>
              <Dashboard />
            </Store>
          </div>
        </div>

        <div className="betBoard">
          <div className="">{`Time: ${this.state.curTime}`}</div>
          <div className="">{`Your bet on A: ${this.state.userBetA}`}</div>
          <div className="">{`Your bet on B: ${this.state.userBetB}`}</div>
          <div className="">{`Total bets on A: ${this.state.poolA}`}</div>
          <div className="">{`Total bets on B: ${this.state.poolB}`}</div>
          <div className="">{`Total bets: ${this.state.poolTotal}`}</div>
          <div className="">{`Chronos balance: ${this.state.chronos}`}</div>
          <form
            onSubmit={this.handleFormSubmit}
            className="addMoneyForm col-sm-11 col-md-5"
          >
            <label>TeamA</label>
            <input type="radio" name="chooseTeam" value="TeamA" />
            <br />
            <label>TeamB</label>
            <input type="radio" name="chooseTeam" value="TeamB" />
            <div className="form-group row col-sm-12">
              <label htmlFor="depositedMoney">Place your bet </label>
              <input
                type="text"
                value={this.state.value}
                className="form-control"
                id="betMoney"
                placeholder="Amount to bet"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <div className="row">
                  <button
                    type="submit"
                    className="btn btn-primary placeBetMoney"
                  >
                    Bet
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <button
              type="submit"
              className="btn btn-primary aWinButton"
              onClick={this.handleGameLogic}
            >
              A wins
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(MatchDash);
