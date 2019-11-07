import React, { Component } from "react";
import API from "../../utils/API";
import './chosenStream.css';
import { Button, Form, FormGroup, Label, Input, CustomInput, Col, Row, Container } from 'reactstrap';

class ChosenStream extends Component {
    state = {
        teamA: "",
        teamB: ""
    }

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
        }
        )
    }
    render () {
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
                        <h6>Event Name</h6>
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <CustomInput type="radio" name="teamChoice" id="teamABetChoice" label={this.state.teamAName} inline />
                                    </Col>
                                    <Col>
                                        <CustomInput type="radio" name="teamChoice" id="teamBBetChoice" label={this.state.teamBName} inline />
                                    </Col>
                                    <Col>
                                        <Label for="betAmount">Bet Total:</Label>
                                        <Input type="select" name="betAmount" id="betAmountSelect" inline>
                                            <option>$10.00</option>
                                            <option>$15.00</option>
                                            <option>$20.00</option>
                                            <option>$25.00</option>
                                            <option>$50.00</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button className="submit">Submit</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )
    }
}

export default ChosenStream;