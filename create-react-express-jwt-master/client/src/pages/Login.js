import React, { Component } from 'react';
import AuthService from './../components/AuthService';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/`);
        //added reload to immediately change navbar when a user connects
        document.location.reload();
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.Auth.loggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <div className="row">
          <h1 className="logInHeader">Login</h1>
        </div>
        <div className="row">
          <form onSubmit={this.handleFormSubmit} className="col-sm-10  col-md-6 logInForm">
            <div className="form-group row">
              <label htmlFor="username" className="formLabel">Username:</label>
              <input className="form-control"
                placeholder="Username goes here..."
                name="username"
                type="text"
                id="username"
                autoComplete="username"
                onChange={this.handleChange} />
            </div>
            <div className="form-group row">
              <label htmlFor="pwd" className="formLabel">Password:</label>
              <input className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                autoComplete="current-password"
                onChange={this.handleChange} />
            </div>
            <div className="row">
              <p className="col-sm-9 col-md-10 formLink"><Link to="/signup">Dont' have an account?</Link></p>
              <button type="submit" className="btn btn-primary logInSubmit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;