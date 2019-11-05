import React, { Component } from 'react';
import withAuth from './components/withAuth';
import MainMatch from './components/MainMatch';
import ScheduleTable from './components/Schedule Table/ScheduleTable';
import Carousel from './components/Carousel/Carousel';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="row">
          <MainMatch />
        </div>

        <div className="row carouselRow">
          <div className="col-sm-10 col-md-6 carouselHeader">
            Other ongoing matches: 
          </div>
        </div>
        <div className="row">
          <Carousel />
        </div>

        <div className="row">
            <ScheduleTable />
        </div>

      </div>
    );
  }
}

export default withAuth(App);
