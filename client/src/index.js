import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import axios from "axios";
import withAuth from "./components/withAuth";

// Our Components
import Login from './pages/Login';
import admin from './pages/admin';
import AddMoney from './pages/AddMoney'
import Signup from './pages/Signup';
import MatchesBoard from './pages/Matches';
import MatchDash from './pages/Matchboard';
import Navbar from './components/Navbar';

//Images
import logo from './utils/icons/logo.png';
import twitchLogo from "./utils/icons/twitch_logo.png";
import socketLogo from "./utils/icons/socket_logo.png";
import pandaLogo from "./utils/icons/pandaScore_logo.png";

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/admin" component={admin} />
      <Route exact path="/addMoney" component={AddMoney} />
      <Route exact path="/matchesBoard" component={withAuth(MatchesBoard)} />
      <Route exact path="/matchDash" component={MatchDash} />
    </div>
    <footer className="sticky-bottom">
      <Link to="#">
        <img className="footerImg" src={logo} alt=""></img>
      </Link>
      <Link to="https://github.com/StoRm619/gambling_game">
        <img
          className="footerImg"
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="GG Github Repo"
        ></img>
      </Link>
      <Link to="https://dev.twitch.tv/docs">
        <img className="footerImg" src={twitchLogo} alt="Twitch API Docs"></img>
      </Link>
      <Link to="https://socket.io/docs/">
        <img className="footerImg" src={socketLogo} alt="Socket.io Docs"></img>
      </Link>
      <Link to="https://pandascore.co/">
        <img className="footerImg" src={pandaLogo} alt="PandaScore Docs"></img>
      </Link>
    </footer>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
