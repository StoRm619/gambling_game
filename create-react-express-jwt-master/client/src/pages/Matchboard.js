import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import ChosenStream from '../components/ChosenStream/ChosenStream.js';
import Store from '../components/Store/Store.js';
import Dashboard from '../components/Dashboard/Dashboard.js';

import '../pages/css/matchBoard.css';
class MatchDash extends Component {

    render() {
        return (
            <div className="matchDash">
            <div className="chosenTeamDetails">
            
            </div>
                <ChosenStream />
                <div className="chat">
                    <Store>
                        <Dashboard />
                    </Store>
                </div>
            </div>
        )

    };

}

export default withAuth(MatchDash);