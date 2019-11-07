import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './matchcard.css';

function Matchcard (props){

        data = {}
    
    
        return (
            <div className="matchCard">
                <Card inverse>
                    <Link className="active" to={{
                        pathname: "/matchDash",
                        data: data // your data array of objects
                    }}>
                    <CardImg id="matchCardImg" width="100%" src="https://eu.lolesports.com/darkroom/1275/d1a745dfa181420f4f70ac624407fbfd:87a5078cdabfadf440f4c9efc6f7b43f" alt={props.name} />
                    <CardImgOverlay className="position">
                    <div className="textBack">
                        <CardTitle className="cardTitle">Origin Tournament</CardTitle>
                        <CardText>{props.eventName}
                        <br/>

                            <small className="scheduledText">Scheduled at: <br/> {props.scheduledAt}</small>
                        </CardText>
                        </div>
                            <img className="teamALogo" src={props.teamALogo} alt="unknown"/>
                            <img className="teamBLogo" src={props.teamBLogo} alt="unkown"/>

                        </CardImgOverlay>
                    </Link>
                </Card>
            </div>
        )

}

export default Matchcard;