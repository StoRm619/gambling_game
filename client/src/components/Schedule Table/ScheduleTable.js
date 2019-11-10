import React, { Component } from 'react';
import './ScheduleTable.css';
import API from "../../utils/API";
import ScheduleTableRow from "../scheduleTableRow/scheduleTableRow";
var moment = require('moment')

class ScheduleTable extends Component {
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
      <div className="col-sm-12 col-md-5 eventSchedule">
        <div className="scheduleStyle">
          <div className="eventScheduleHeader">Upcoming Matches </div>
          <table className="table eventScheduleTable table-dark">
            <thead>
              <tr>
                <th scope="col">Event</th>
                <th scope="col">Teams</th>
                <th scope="col">Time(PST)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.matches.map(match => (
                <ScheduleTableRow
                  key={match.id}
                  eventName={match.serie.full_name}
                  scheduledAt={moment(match.scheduled_at).format("h:mm a")}
                  teamAName={
                    match.opponents[0]
                      ? match.opponents[0].opponent.name
                      : "TBD"
                  }
                  teamBName={
                    match.opponents[1]
                      ? match.opponents[1].opponent.name
                      : "TBD"
                  }
                  name={
                    match.name
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ScheduleTable;