import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';

class Profile extends Component {

  state = {
    username: "",
    email: "",
    chronos: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        chronos:res.data.chronos
      })
    });
  }

  render() {
    return (
      <div className="container profilePage">
        <div className="row">
          <div className="col-sm-12 col-md-12 profileHeader">
            <div className="row">
              <div className="col-sm-12  col-md-8 profileUsernameDisplay">
                Welcome: {this.state.username}!
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12  col-md-8 profileBalanceDisplay">
                Current balance: {this.state.chronos}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="profileTableHeader">
              Betting History
            </div>
            <table className="table table-dark profileTable col-sm-12 col-md-8">
              <thead>
                <tr>
                  <th scope="col">Result</th>
                  <th scope="col">Event</th>
                  <th scope="col">A x B</th>
                  <th scope="col">Bet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Win</td>
                  <td>Event name</td>
                  <td>A x B</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Win</td>
                  <td>Event name</td>
                  <td>A x B</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Win</td>
                  <td>Event name</td>
                  <td>A x B</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);