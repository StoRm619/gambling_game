import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import MatchCard from '../components/MatchCard/Matchcard';
import matches from '../matches.json';
import { Jumbotron, Container } from 'reactstrap';
import './css/matches.css';

class MatchesBoard extends Component {
    state = {
        matches
    };
    render() {
        return (

            <div className="matches">
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">Scheduled Matches</h1>
                    <p className="lead">This is where all of the matches are going to show up, bet on or not.</p>
                    </Container>
                </Jumbotron>
            </div>
                {this.state.matches.map(match => (
                <MatchCard
                        key={match.id}
                        eventName={match.eventName}
                        scheduledAt={match.scheduledAt}
                        />

                ))}
            </div>
        )

    };
    
}

export default withAuth(MatchesBoard);