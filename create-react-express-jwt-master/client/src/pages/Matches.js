import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import MatchCard from '../components/MatchCard/Matchcard';
import matches from '../matches.json';
import './matches.css';

class MatchesBoard extends Component {
    state = {
        matches
    };
    render() {
        return (
            <div className="matches">
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