import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../AuthService";

class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <ul id="footer-nav">
          <div className="col-3">
            <li className="footer-nav-item">
              <Link to="Github">GGs Github</Link>
            </li>
          </div>

          <div className="col-3">
            <li className="footer-nav-item">
              <Link to="">About Us</Link>
            </li>
          </div>
          
          <div className="col-3">
            <li className="footer-nav-item">
              <Link to="">Raw Data</Link>
            </li>
          </div>

          <div className="col-3">
            <li className="footer-nav-item">
              Credit to "David Libeau" for the "Hacked" Font
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
export default Footer;
