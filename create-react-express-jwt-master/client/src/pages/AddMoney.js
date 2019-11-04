import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';

class AddMoney extends Component {
    state = {
        username: "",
        email: "",
        chronos: "",
        inputValue: ""
    };

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                email: res.data.email,
                chronos: res.data.chronos
            })
        });
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        alert(`${this.state.username} successfully added ${this.state.inputValue} to their balance!
         New balance: ${this.state.chronos + parseInt(this.state.inputValue)}`)

        this.setState({
            chronos: this.state.chronos + parseInt(this.state.inputValue)
        });

        //db.users.update({username: "jasontest"},{$set: {chronos: 110}})
        API.getUser(this.props.user.id).then(res => {
            console.log("1")
            API.updateUser(this.state.username, this.state.chronos)
        });
    };

    render() {
        return (
            <div className="container addMoney">
                <div className="row">
                    <div className="addMoneyPageHeader col-sm-6 col-md-4">Current balance: {this.state.chronos}</div>
                </div>

                <div className="row">
                    <form onSubmit={this.handleFormSubmit} className="addMoneyForm col-sm-11 col-md-5">
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">Add to balance </label>
                            <input type="text" value={this.state.value} className="form-control" id="depositedMoney" placeholder="Amount to add" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="formName">Name </label>
                            <input type="text" className="form-control" id="formName" placeholder="Name" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="formCardType">Card Type </label>
                            <select className="form-control" id="formCardType">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="formCardNum">Card Number </label>
                            <input type="text" className="form-control" id="formCardNum" placeholder="xxx xxxx xxxx" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="formCardExp">Expiration </label>
                            <input type="date" className="form-control" id="formCardExp" placeholder="Exp" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="formCardCv">CV </label>
                            <input type="text" className="form-control" id="formCardCv" placeholder="xxx" />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="form-check col-sm-9">
                                        <input type="checkbox" className="form-check-input" id="addMoneyCheck" />
                                        <label className="form-check-label" htmlFor="addMoneyCheck">Confirm</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary addMoneySubmit">Submit</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }


}
export default withAuth(AddMoney);