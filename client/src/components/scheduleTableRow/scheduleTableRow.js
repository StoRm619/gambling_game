import React from "react";

function ScheduleTableRow(props) {

    return (
        <tr>
            <td>{props.eventName}</td>
            <td>{props.teamAName} X {props.teamBName}</td>
            <td>{props.scheduledAt}</td>
        </tr>
    )

}

export default ScheduleTableRow;