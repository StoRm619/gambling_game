import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link link underline" to="/addMoney">Add Money</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link underline" to="/matchesBoard">Current Matches</Link>
                    </li>
                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link link underline" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                    </li>
                </ul>
            );
        }
        else {
            return (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link underline" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link underline" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" id="navColor">
                <div className="container" id="nav-container">
                    <Link className="navbar-brand" to="/"> Gambling Game</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;