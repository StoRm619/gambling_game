import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import ChosenStream from '../components/ChosenStream/ChosenStream.js';
import Store from '../components/Store/Store.js';
import Dashboard from '../components/Dashboard/Dashboard.js';
import { Jumbotron, Container } from 'reactstrap';
import '../pages/css/matchBoard.css';
class MatchDash extends Component {

    render() {
        return (
            <div className="matchDash">
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Event Name</h1>
                            <p className="lead"><strong>Team A vs Team B</strong></p>
                        </Container>
                    </Jumbotron>
                </div>
            <div className="dashboardPosition">
            <div className="chosenTeamDetails">
            
            </div>
                <ChosenStream />
                <div className="chat">
                    <Store>
                        <Dashboard />
                    </Store>
                </div>
            </div>
            </div>
        )

    };

}

export default withAuth(MatchDash);