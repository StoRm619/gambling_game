import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import '../../utils/HACKED.ttf';
import './matchcard.css';

function Matchcard (props){

        return (
            <div className="matchCard">
                <Card inverse>
                    <CardImg className="matchCardImg" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfE6r5zseRCvX1JfxBBB4napxlw7ii74F6xlR61uaHbkRR9BI0" alt={props.name} />
                    <CardImgOverlay>
                        <CardTitle>Origin Tournament</CardTitle>
                        <CardText>{props.eventName}</CardText>
                        <CardText>
                            <small className="scheduledText">Scheduled at: {props.scheduledAt}</small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        )

}

export default Matchcard;