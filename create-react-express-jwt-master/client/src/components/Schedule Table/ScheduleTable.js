import React from 'react';
import './ScheduleTable.css';

function ScheduleTable() {
    return (<div className="col-sm-12 col-md-5 eventSchedule">
        <div className="eventScheduleHeader">Upcoming matches: </div>
        <table class="table eventScheduleTable table-dark">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Teams</th>
                    <th scope="col">Odds</th>
                    <th scope="col">Time</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Event name</td>
                    <td>A x B</td>
                    <td>2 x 1</td>
                    <td>Time</td>
                </tr>
                <tr>
                <td>Event name</td>
                    <td>A x B</td>
                    <td>2 x 1</td>
                    <td>Time</td>
                </tr>
                <tr>
                <td>Event name</td>
                    <td>A x B</td>
                    <td>2 x 1</td>
                    <td>Time</td>
                </tr>
                <tr>
                <td>Event name</td>
                    <td>A x B</td>
                    <td>2 x 1</td>
                    <td>Time</td>
                </tr>
                <tr>
                <td>Event name</td>
                    <td>A x B</td>
                    <td>2 x 1</td>
                    <td>Time</td>
                </tr>
            </tbody>
        </table>
    </div>
    )

}

export default ScheduleTable;