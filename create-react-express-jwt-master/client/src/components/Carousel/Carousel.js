import React from 'react';
import './Carousel.css';

function Carousel() {
    return (
        <div className="carousel slide col-sm-10 col-md-6" data-ride="carousel" data-interval="8000">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row">
                        <div className="col-sm-6 carouselPic ">
                            <iframe
                                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                                height="100%"
                                width="100%"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="true">
                            </iframe>
                        </div>
                        <div className="col-sm-6 carouselInfo">
                            <table class="table table-dark carouselInfoTable">
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
                <div class="carousel-item">
                    <div className="row">
                        <div className="col-sm-6 carouselPic ">
                            <iframe
                                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                                height="100%"
                                width="100%"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="true">
                            </iframe>
                        </div>
                        <div className="col-sm-6 carouselInfo">
                            <table class="table table-dark carouselInfoTable">
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
                <div class="carousel-item">
                    <div className="row">
                        <div className="col-sm-6 carouselPic ">
                            <iframe
                                src="https://player.twitch.tv/?channel=summit1g&muted=true&autoplay=false"
                                height="100%"
                                width="100%"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="true">
                            </iframe>
                        </div>
                        <div className="col-sm-6 carouselInfo">
                            <table class="table table-dark carouselInfoTable">
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