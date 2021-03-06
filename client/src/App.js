import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import withAuth from './components/withAuth';
import MainMatch from './components/MainMatch';
import ScheduleTable from './components/Schedule Table/ScheduleTable';
import Carousel from './components/Carousel/Carousel';
import Results from './components/result table/Results'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3" id= "ggJumbotron">GG</h1>
              <p className="lead"><strong>Real Time ESports Stakes with Real People</strong></p>
            </Container>
          </Jumbotron>  
        </div>
        <div className="row">
          <MainMatch />
        </div>

        <div className="row carouselRow">
          <div className="col-sm-10 col-md-6 carouselHeader">
            Other Live Matches
          </div>
        </div>
        <div className="row">
          <Carousel />
        </div>

        <div className="row">
            <ScheduleTable />

            
            <Results />
            </div>
      </div>
    );
  }
}

export default withAuth(App);
