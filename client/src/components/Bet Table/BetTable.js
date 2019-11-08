import React, { Component } from 'react';
import './BetTable.css';
import API from "../../utils/API";
import ScheduleTableRow from '../scheduleTableRow/scheduleTableRow'
var moment = require('moment');

class BetTable extends Component {
    state = {
        teamA: "",
        teamB: "",
        matches: []
    }
    componentDidMount() {
      API.livedata5(0).then(res => {
        this.setState({
          matches: res.data,
        })
  
      })
    }
    render() {
        return (
          <div className="bets">
            <div className="betHeader">Upcoming matches: </div>
            <table className="table betTable table-dark">
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Teams</th>
                  <th scope="col">Time (PST)</th>
                </tr>
              </thead>
              <tbody>
              {this.state.matches.map(match => (
              <ScheduleTableRow
                key={match.id}
                eventName={match.serie.full_name}
                scheduledAt={moment(match.scheduled_at).format('h:mm a')}
                teamAName={
                  match.opponents[0] ? match.opponents[0].opponent.name : 'TBD'
                }
                teamBName={
                  match.opponents[1] ? match.opponents[1].opponent.name : 'TBD'
                }
              />

            ))}
              </tbody>
            </table>
          </div>
        );
    }
}

export default BetTable;