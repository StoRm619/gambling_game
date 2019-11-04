import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import ChosenStream from '../components/ChosenStream';
import './css/matchBoard.css';

class MatchDash extends Component {

    render() {
        return (
            <div className="matchDash">
            <ChosenStream />
            <div className="chosenTeamDetails">
            
            </div>
            <div className="chat">
            
            </div>
            </div>
        )

    };

}

export default withAuth(MatchDash);