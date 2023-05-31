import React from "react";
import weather from "../images/weather.png";
import manga from "../images/manga.png";
import yoga from "../images/yoga.png";

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
          <footer>
            <div className="contact-box d-flex justify-content-between rounded d-none d-md-flex">
              <div>
                <h4>Work inquiry</h4>
                <p className="text-muted m-0">Let's work together</p>
              </div>
              <div>
                <a
                  href="contact.html"
                  className="btn btn-branding"
                  title="Contact Katrin Pavlova"
                >
                  Contact me
                </a>
              </div>
            </div>
            <div className="text-center">
              <a
                href="mailto:katrin@mail.com"
                className="email-link"
                title="Email Katrin"
              >
                katrin@mail.com
              </a>
              <div className="social-links">
                <a
                  href="http://github.com/meowmeow"
                  target="_blank"
                  title="Github profile"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="http://instagram.com/meowmeow"
                  target="_blank"
                  title="Instagram profile"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="http://twitter.com/meowmeow"
                  target="_blank"
                  title="Twitter profile"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>

            <p className="text-center">
              <a
                href="https://github.com/Meowmaniac/portfolio"
                alt="Source code"
              >
                Open source code
              </a>
              by Katrin Pavlova
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Work;
