import React, { Component } from "react";
import API from "../../utils/API";
import './chosenStream.css';
import withAuth from './../withAuth';
import { Container } from 'reactstrap';

class ChosenStream extends Component {
    state = {
        username: "",
        email: "",
        chronos: "",
        inputValue: "",
        userBetA: 0,
        poolA: 0,
        userBetB: 0,
        poolB: 0,
        poolTotal: 0
    };
    z

    componentDidMount() {
        API.livedata(0).then(res => {
            console.log(res.data)
            this.setState({
                eventName: res.data[2].serie.full_name,
                leagueName: res.data[2].league.name,
                leagueLogo: res.data[2].league.image_url,
                teamAName: res.data[2].opponents[0].opponent.name,
                teamBName: res.data[2].opponents[1].opponent.name,
                teamALogo: res.data[2].opponents[0].opponent.image_url,
                teamBLogo: res.data[2].opponents[1].opponent.image_url,
                gameNumber: res.data[2].number_of_games,
                scheduledAt: res.data[2].scheduled_at
            })
        })
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                email: res.data.email,
                chronos: res.data.chronos,
                userBetA: res.data.userBetA,
                userBetB: res.data.userBetB
            })
        })
    }
    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (document.querySelector('input[name="chooseTeam"]:checked').value === 'TeamA') {
            this.setState({
                chronos: this.state.chronos - parseInt(this.state.inputValue),
                userBetA: this.state.userBetA + parseInt(this.state.inputValue),
                poolA: this.state.poolA + parseInt(this.state.inputValue),
                poolTotal: this.state.poolTotal + parseInt(this.state.inputValue),
            });

            API.getUser(this.props.user.id).then(res => {
                API.updateUser(this.state.username, this.state.chronos, this.state.userBetA)
            });
        } else if (document.querySelector('input[name="chooseTeam"]:checked').value === 'TeamB') {
            this.setState({
                chronos: this.state.chronos - parseInt(this.state.inputValue),
                userBetB: this.state.userBetB + parseInt(this.state.inputValue),
                poolB: this.state.poolB + parseInt(this.state.inputValue),
                poolTotal: this.state.poolTotal + parseInt(this.state.inputValue),
            });

            API.getUser(this.props.user.id).then(res => {
                API.updateUserB(this.state.username, this.state.chronos, this.state.userBetB)
            });
        }

    };
    render() {
        return (
            <div className="chosenTwitchPlayer">
                <iframe
                    src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                    height="100%"
                    width="100%"
                    frameBorder="0"
                    title="mainTwitch"
                    scrolling="no"
                >
                </iframe>
                <div className="streamDetails">
                    <div className="detailBetContainer">
                        <Container>
                            <div className="currentBal">
                                <p>Chronos balance:</p>
                                <p>${this.state.chronos ? this.state.chronos : "00.00"}</p>
                            </div>
                            <h6>Event Name</h6>
                            <form
                                onSubmit={this.handleFormSubmit}
                                className="addMoneyForm col-sm-11 col-md-5"
                            >
                                <label>TeamA</label>
                                <input type="radio" name="chooseTeam" value="TeamA" />
                                <br />
                                <label>TeamB</label>
                                <input type="radio" name="chooseTeam" value="TeamB" />
                                <div className="form-group row col-sm-12">
                                    <label htmlFor="depositedMoney">Place your bet </label>
                                    <input
                                        type="text"
                                        value={this.state.value}
                                        className="form-control"
                                        id="betMoney"
                                        placeholder="Amount to bet"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <button
                                                type="submit"
                                                className="btn btn-primary placeBetMoney">Bet</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(ChosenStream);