import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './matchcard.css';

function Matchcard (props){

        return (
            <div className="matchCard">
                <Card inverse>
                    <CardImg id="matchCardImg" width="100%" src="https://eu.lolesports.com/darkroom/1275/d1a745dfa181420f4f70ac624407fbfd:87a5078cdabfadf440f4c9efc6f7b43f" alt={props.name} />
                    <CardImgOverlay className="position">
                    <div className="textBack">
                        <CardTitle className="cardTitle">Origin Tournament</CardTitle>
                        <CardText>{props.eventName}
                        <br/>

                            <small className="scheduledText">Scheduled at: <br/> {props.scheduledAt}</small>
                        </CardText>
                        </div>
                        <img className="teamALogo" src="https://cdn.pandascore.co/images/team/image/126443/10206.png" alt="unkown"/>
                        <img className="teamBLogo" src="http://www.strangehistory.net/blog/wp-content/uploads/2015/08/question-mark-xxl.png" alt="unkown"/>

                        </CardImgOverlay>
                </Card>
            </div>
        )

}

export default Matchcard;