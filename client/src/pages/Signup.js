import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // go to home page after signup
    if (this.Auth.loggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div className="container signUpPage">
        <div className="row">
          <h1 className="signUpHeader">User sign up</h1>
        </div>
        <div className="row">
          <form
            onSubmit={this.handleFormSubmit}
            className="col-sm-10 col-md-10 signUpForm"
          >
            <div className="form-group row">
              <label htmlFor="username" className="formLabel">
                Username:
              </label>
              <input
                className="form-control"
                placeholder="Username goes here..."
                name="username"
                type="text"
                id="username"
                autoComplete="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="formLabel">
                Email address:
              </label>
              <input
                className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="pwd" className="formLabel">
                Password:
              </label>
              <input
                className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                autoComplete="new-password"
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <p className="col-sm-9 col-md-10 formLink">
                <Link to="/login" id="noAcctMessage">
                  Already have an account?
                </Link>
              </p>
              <button type="submit" className="btn signUpSubmit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;