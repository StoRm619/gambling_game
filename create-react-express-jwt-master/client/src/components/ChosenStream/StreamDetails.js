import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import './chosenStream.css';

function StreamDetails() {
    return (<div className="detailBetContainer">
    <Container>
    <h6>Event Name</h6>
    <Form>
            <FormGroup>
            <Row>
                <Col>
                    <CustomInput type="radio" name="teamChoice" id="teamABetChoice" label="Team A" inline />
                </Col>
                <Col>    
                            <CustomInput type="radio" name="teamChoice" id="teamBBetChoice" label="Team B" inline />
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
            <Button>Submit</Button>
    </Form>
        </Container>
    </div>

    )
}
export default StreamDetails;