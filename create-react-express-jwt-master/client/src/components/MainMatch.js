import React, { Component } from "react";
import API from "../utils/API.js";

class MainMatch extends Component{
// function MainMatch() {
    state = {
        teamA:"",
        teamB:""
   }
   componentDidMount() {
    API.livedata(0).then(res =>{
        console.log(res.data)
    this.setState({
        matchname: res.data[0].name
    })
}
    )
   }
   render() {
    return (<div className="col-sm-11 col-md-6 mainMatch">
        <div className="row mainTwitchPlayer">
            <iframe
                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=true"
                height="100%"
                width="100%"
                frameBorder="0"
                title="mainTwitch"
                scrolling="no">
            </iframe>
        </div>

        <div className="row">
            <div className="mainMatchInfo">
                <table className="table table-dark mainMatchTable">
                    <tbody>
                        <tr>
                            <td>Event name</td>
                            <td> {this.state.matchname}</td>
                            <td>2 x 1</td>
                            <td className="mainTableLink">Link</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
    }
}

export default MainMatch;