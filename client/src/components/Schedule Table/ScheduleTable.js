import React, { Component } from 'react';
import './ScheduleTable.css';
import API from "../../utils/API";
var moment = require('moment');

class ScheduleTable extends Component {
    state = {
        teamA: "",
        teamB: ""
    }
    componentDidMount() {
        API.livedata(0).then(res => {
            this.setState({
                teamAName: res.data[2].opponents[0].opponent.name,
                teamBName: res.data[2].opponents[1].opponent.name,
                matchTime: moment(res.data[2].scheduled_at).format('h:mm a'),
                eventName: res.data[2].league.name
            })
        }
        )
    }
    render() {
        return (
          <div className="col-sm-12 col-md-5 eventSchedule">
            <div className="eventScheduleHeader">Upcoming matches: </div>
            <table className="table eventScheduleTable table-dark">
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Teams</th>
                  <th scope="col">Time (PST)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.eventName}</td>
                  <td>
                    {this.state.teamAName} x {this.state.teamBName}
                  </td>
                  <td>{this.state.matchTime}</td>
                </tr>
                <tr>
                  <td>{this.state.eventName}</td>
                  <td>
                    {this.state.teamAName} x {this.state.teamBName}
                  </td>
                  <td>{this.state.matchTime}</td>
                </tr>
                <tr>
                  <td>{this.state.eventName}</td>
                  <td>
                    {this.state.teamAName} x {this.state.teamBName}
                  </td>
                  <td>{this.state.matchTime}</td>
                </tr>
                <tr>
                  <td>{this.state.eventName}</td>
                  <td>
                    {this.state.teamAName} x {this.state.teamBName}
                  </td>
                  <td>{this.state.matchTime}</td>
                </tr>
                <tr>
                  <td>{this.state.eventName}</td>
                  <td>
                    {this.state.teamAName} x {this.state.teamBName}
                  </td>
                  <td>{this.state.matchTime}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default ScheduleTable;