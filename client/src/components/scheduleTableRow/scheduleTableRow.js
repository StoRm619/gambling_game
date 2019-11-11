import React from "react";

function ScheduleTableRow(props) {

    return (
      <tr>
        <td id="matchNameCol">{props.eventName}</td>
        <td>
          {props.teamAName}{" "}
          <img
            src="https://image.freepik.com/free-vector/versus-background-with-neon-style_23-2147687490.jpg"
            alt="VS"
            width="25"
            height="25"
            id="vs"
          ></img>{" "}
          {props.teamBName}
        </td>
        <td>{props.scheduledAt}</td>
      </tr>
    );

}

export default ScheduleTableRow;