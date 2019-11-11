import React from 'react';
import './Carousel.css';


function Carousel() {
    
    return (
      <div
        className="carousel slide col-sm-10 col-md-6"
        data-ride="carousel"
        data-interval="8000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-6 carouselPic ">
                <iframe
                  src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  title="carousel1"
                  scrolling="no"
                  className="carouselIframe"
                ></iframe>
              </div>
              <div className="col-sm-6 carouselInfo">
                <table className="table table-dark carouselInfoTable">
                  <tbody>
                    <tr>
                      <td>Upper Bracket Quarterfinal 4: Nemiga vs forZe</td>
                    </tr>
                    <tr>
                      <td>$2500 United States Dollar</td>
                    </tr>
                    <tr>
                      <td>CS:GO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6 carouselPic ">
                <iframe
                  src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  title="carousel2"
                  scrolling="no"
                ></iframe>
              </div>
              <div className="col-sm-6 carouselInfo">
                <table className="table table-dark carouselInfoTable">
                  <tbody>
                    <tr>
                      <td>Upper Bracket Quarterfinal 3: AVANGAR vs CR4ZY</td>
                    </tr>
                    <tr>
                      <td>$2500 United States Dollar</td>
                    </tr>
                    <tr>
                      <td>CS:GO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6 carouselPic ">
                <iframe
                  src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  title="carousel3"
                  scrolling="no"
                ></iframe>
              </div>
              <div className="col-sm-6 carouselInfo">
                <table className="table table-dark carouselInfoTable">
                  <tbody>
                    <tr>
                      <td>
                        Upper Bracket Quarterfinal 2: Movistar Riders vs HAVU
                      </td>
                    </tr>
                    <tr>
                      <td>$2500 United States Dollar</td>
                    </tr>
                    <tr>
                      <td>CS:GO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Carousel;