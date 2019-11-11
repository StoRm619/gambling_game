import React from 'react';
import './Carousel.css';


function Carousel() {
    
    return (
        <div className="carousel slide col-sm-10 col-md-6" data-ride="carousel" data-interval="8000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-sm-6 carouselPic ">
                            <iframe
                                src="https://player.twitch.tv/?channel=twitchpresents&muted=true&autoplay=false"
                                height="100%"
                                width="100%"
                                frameBorder="0"
                                title="carousel1"
                                scrolling="no"
                                className="carouselIframe">
                            </iframe>
                        </div>
                        <div className="col-sm-6 carouselInfo">
                            <table className="table table-dark carouselInfoTable">
                                <tbody>
                                    <tr>
                                        <td>Event name</td>
                                    </tr>
                                    <tr>
                                        <td>A x B</td>
                                    </tr>
                                    <tr>
                                        <td>2 x 1</td>
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
                                src="https://player.twitch.tv/?channel=timthetatman&muted=true&autoplay=false"
                                height="100%"
                                width="100%"
                                frameBorder="0"
                                title="carousel2"
                                scrolling="no">
                            </iframe>
                        </div>
                        <div className="col-sm-6 carouselInfo">
                            <table className="table table-dark carouselInfoTable">
                                <tbody>
                                    <tr>
                                        <td>Event name</td>
                                    </tr>
                                    <tr>
                                        <td>A x B</td>
                                    </tr>
                                    <tr>
                                        <td>2 x 1</td>
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
                                src="https://player.twitch.tv/?channel=drdisrespect&muted=true&autoplay=false"
                                height="100%"
                                width="100%"
                                frameBorder="0"
                                title="carousel3"
                                scrolling="no">
                            </iframe>
                        </div>
                        <div className="col-sm-6 carouselInfo">
                            <table className="table table-dark carouselInfoTable">
                                <tbody>
                                    <tr>
                                        <td>Event name</td>
                                    </tr>
                                    <tr>
                                        <td>A x B</td>
                                    </tr>
                                    <tr>
                                        <td>2 x 1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Carousel;