import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from "../../utils/API";
import './Results.css'

class Results extends Component {
    state = {
        currentBet: "",
        currentMatchup: "",
        currentResult: ""
    }
    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                currentResult: res.data.currentResult,
                currentBet: res.data.currentBet,
                currentMatchup: res.data.currentMatchup,
            })
        })
    }
    render() {
        return (
          <div className="results">
            <div className="resultsHeader">Recent Bets </div>

            <table className="table table-dark resultsTable">
              <thead>
                <tr>
                  <th scope="col">Result</th>
                  <th scope="col">Net Chronos</th>
                  <th scope="col">Matchup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.currentResult || "No recent bets!"}</td>
                  <td>{this.state.currentBet || ""}</td>
                  <td>{this.state.currentMatchup || ""}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }

}

export default withAuth(Results);