import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';

class AddMoney extends Component {

    render() {
        return (
            <div className="container addMoney">
                <div clasName="row">
                    <div className="addMoneyPageHeader col-sm-6">Current balance: $</div>
                </div>

                <div className="row">
                    <form className="addMoneyForm col-sm-11">
                        <div className="form-group row col-sm-12">
                            <label for="depositedMoney">Add to balance </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="Amount to add" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label for="depositedMoney">Add to balance </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="Amount to add" />
                        </div>
                        <div className="form-group row col-sm-12">
                            <label for="depositedMoney">Add to balance </label>
                            <input type="text" className="form-control" id="depositedMoney" placeholder="Amount to add" />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Confirm</label>
                        </div>
                        <button type="submit" className="btn btn-primary addMoneySubmit">Submit</button>

                    </form>
                </div>
            </div>
        )
    }


}
export default withAuth(AddMoney);