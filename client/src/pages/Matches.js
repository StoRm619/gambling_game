import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import MatchCard from '../components/MatchCard/Matchcard';
import Wrapper from '../components/Wrapper'
import { Jumbotron, Container } from 'reactstrap';
import API from "../utils/API.js";
import './css/matches.css';

class MatchesBoard extends Component {
    state = {
        teamA: "",
        teamB: "",
        matches: []
    };

    componentDidMount() {
        API.livedata(0).then(res => {
            console.log(res.data)
            this.setState({
                matches: res.data,
            }, () => console.log(this.state.matches))
        })
    }


    
    render() {
        return (

            <div className="matches">
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Scheduled Matches</h1>
                            <p className="lead"><strong>This is where all of the matches are going to show up, bet on or not.</strong></p>
                        </Container>
                    </Jumbotron>
                </div>
                <div className="matchesBox">
                    <Wrapper>
                        {this.state.matches.map(match => (
                            <MatchCard
                                key={match.id}
                                eventName={match.serie.full_name}
                                scheduledAt={match.scheduled_at}
                                teamALogo={match.opponents[0] && match.opponents[0].opponent.image_url}
                                teamBLogo={match.opponents[1] && match.opponents[1].opponent.image_url}                           
                                teamAName={match.opponents[0] && match.opponents[0].opponent.name}
                                teamBName={match.opponents[1] && match.opponents[1].opponent.name}
                                matchName={match.name}

                            
                            
                                />

                        ))}
                    </Wrapper>
                </div>
            </div>
        )

    };

}

export default withAuth(MatchesBoard);

