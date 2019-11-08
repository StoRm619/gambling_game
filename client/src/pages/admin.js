import React, { Component } from 'react';
import withAuth from './../components/withAuth';

import '../pages/css/matchBoard.css';
import API from './../utils/API';
var moment = require('moment');


class admin extends Component {
    state = {
        username: "",
        winner: "",
        chronos: "",
        inputValue: "",
        userBetA: 0,
        poolA: 0,
        userBetB: 0,
        poolB: 0,
        poolTotal: 0,
        curTime: moment().format('h:mm a')
    };

    componentDidMount() {
        API.getAllUsers().then(res => {
            //console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
                this.setState({
                    poolA: this.state.poolA + res.data[i].userBetA,
                    poolB: this.state.poolB + res.data[i].userBetB,
                    poolTotal: this.state.poolTotal + res.data[i].userBetA + res.data[i].userBetB,
                    inputValue: ""
                })
            }
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
        API.livedata().then(res => {
            console.log(res.data)
              this.setState({
                  teamAName: res.data[0].opponents[0].opponent.name,
                  teamBName: res.data[0].opponents[1].opponent.name,
                
              })
          }
          )

    }
    handleGameLogic = event => {
        event.preventDefault();
            alert("Team A has won");
            API.getAllUsers().then(res => {
                for (let i = 0; i < res.data.length; i++) {
                        //calculate how much they won, add to balance, call API to update database
                        API.payWinners(res.data[i].username, res.data[i].chronos
                            + parseInt(Math.floor((res.data[i].userBetA / this.state.poolA) * this.state.poolTotal)))
                }
                //reset fields on page
                this.setState({
                    userBetA: 0,
                    poolA: 0,
                    userBetB: 0,
                    poolB: 0,
                    poolTotal: 0
                })
            })
      
    }
    handleGameLogicB = event => {
        event.preventDefault();
        alert("Team B has won");
            API.getAllUsers().then(res => {
                for (let i = 0; i < res.data.length; i++) {
                        //calculate how much they won, add to balance, call API to update database
                        API.payWinners(res.data[i].username, res.data[i].chronos
                            + parseInt(Math.floor((res.data[i].userBetB / this.state.poolB) * this.state.poolTotal)))
                }
                //reset fields on page
                this.setState({
                    userBetA: 0,
                    poolA: 0,
                    userBetB: 0,
                    poolB: 0,
                    poolTotal: 0
                })
            })

        }
    
    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleFormSubmit = event => {
        console.log(document.querySelector('input[name="chooseTeam"]:checked').value)
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
            <div className="row">
                <button type="submit" className="btn btn-primary aWinButton" onClick={this.handleGameLogic} >{this.state.teamAName}</button>
                <button type="submit"  className="btn btn-primary aWinButton" onClick={this.handleGameLogicB}  >{this.state.teamBName}</button>
            </div>
          
        )

    };

}

export default withAuth(admin);