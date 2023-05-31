import React from "react";
import weather from "../images/weather.png";
import manga from "../images/manga.png";
import yoga from "../images/yoga.png";
import Footer from "../Footer";

class Work extends React.Component {
  render() {
    return (
      <div>
        <div className="content-container container">
          <div className="content text-center">
            <h1 className="m-4">Take a look at what I've been working on!</h1>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={manga}
                  alt="Manga App preview"
                  className="img-fluid"
                />
                <h3>Manga Project</h3>
                <p>Built with HTML and CSS</p>
              </div>
              <div className="col-md-6">
                <img
                  src={weather}
                  alt="Weather App preview"
                  className="img-fluid"
                />
                <h3>Weather Project</h3>
                <p>Built with HTML, CSS and JavaScript</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={yoga} alt="Yoga App preview" className="img-fluid" />
                <h3>Yoga Project</h3>
                <p>Built with HTML and CSS</p>
              </div>
              <div className="col-md-6">
                <img src="images/" alt="" className="img-fluid" />
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Work;
