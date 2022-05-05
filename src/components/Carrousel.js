import React from 'react';
import imagen from '../public/imagen1.jpeg';

const Carrousel = () => {
    return (
        <div id="carouselExampleCaptions" classNameName="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="2000">
                    <img src={imagen} className="d-block w-100" alt="..." style={{height: '620px'}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Coding</h5>
                        <p>Expertos en desarrollo web.</p>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>




    );
}

export default Carrousel;