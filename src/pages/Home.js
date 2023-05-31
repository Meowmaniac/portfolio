import React from "react";
import weather from "../images/weather.png";
import manga from "../images/manga.png";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="hero text-center">
            <p>👋 Hi I am</p>
            <h1>Katrin Pavlova</h1>
            <h2 className="mb-5">🇳🇱 Front-end developer, based in Europe</h2>
            <div>
              <a
                href="/contact"
                className="btn btn-branding"
                title="Contact Katrin Pavlova"
              >
                Contact me
              </a>
              <a
                href="/about"
                className="btn btn-branding-outlined"
                title="About Katrin Pavlova"
              >
                About me
              </a>
            </div>
          </div>
          <div className="project-section">
            <div className="row">
              <div className="col-sm-6 d-none d-sm-block">
                <img
                  src={weather}
                  alt="Weather app preview"
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-6 col-xs-12">
                <h2 className="text-md-left">Weather app</h2>
                <p className="text-left">
                  I built this project during SheCodes workshop. It allows user
                  to search for the city to see the weather. This app shows
                  current temperature, wind speed, humidity, visibility and
                  pressure. There is also 6 days forecast.
                </p>
                <a
                  href="https://glittering-churros-17bae8.netlify.app/"
                  className="btn btn-branding"
                  title="Launch Weather App"
                >
                  Launch Weather App
                </a>
              </div>
            </div>
          </div>
          <div className="project-section">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <h2 className="text-md-left">Manga app</h2>
                <p className="text-left">
                  This is a simple site about my hobby. It contains a short
                  description and the link to read more about this topic.
                </p>
                <a
                  href="work.html"
                  className="btn btn-branding"
                  title="Launch Manga App"
                >
                  Launch Manga App
                </a>
              </div>
              <div className="col-sm-6 d-none d-sm-block">
                <img src={manga} alt="Yoga App preview" className="img-fluid" />
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
                  href="/contact"
                  className="btn btn-branding"
                  title="Contact Katrin Pavlova"
                >
                  Contact me
                </a>
              </div>
            </div>
            <div className="text-center">
              <a
                href="mailto:evil.cat.software@gmail.com"
                className="email-link"
                title="Email Katrin"
              >
                evil.cat.software@gmail.com
              </a>
              <div className="social-links">
                <a
                  href="https://github.com/Meowmaniac"
                  target="_blank"
                  title="Github profile"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/katrin-pavlova/"
                  target="_blank"
                  title="Instagram profile"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://t.me/Meowmaniac"
                  target="_blank"
                  title="Twitter profile"
                >
                  <i className="fa-brands fa-telegram"></i>
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

export default Home;
