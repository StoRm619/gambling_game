import React, { Component } from 'react';
import withAuth from './../components/withAuth';

class AddMoney extends Component {

    render() {
        return (
            <div className="container addMoney">
                <div className="row">
                    <div className="addMoneyPageHeader col-sm-6 col-md-4">Current balance: $</div>
                </div>

                <div className="row">
                    <form className="addMoneyForm col-sm-11 col-md-5">
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">Add to balance </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="Amount to add" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">Name </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="Name" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">Card Type </label>
                            <select className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">Card Number </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="xxx xxxx xxxx" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">Expiration </label>
                            <input type="date" className="form-control" id="depositedMoney" placeholder="Amount to add" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label htmlFor="depositedMoney">CV </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="xxx" />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="form-check col-sm-9">
                                        <input type="checkbox" className="form-check-input" id="addMoneyCheck" />
                                        <label className="form-check-label" htmlFor="addMoneyCheck">Confirm</label>
                                    </div>
                                    <button type="submit" className="btn btn-dark addMoneySubmit">Submit</button>
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