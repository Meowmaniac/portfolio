import React from "react";
import photo from "../images/me.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="content-container container">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <h1>Hi, I am Katrin Pavlova</h1>
              <h2>Frontend developer based in the Netherlands.</h2>
              <p>
                I like to learn something new and face new challenges. This
                workshop was a nice chance to refresh my previous knowledges and
                learn something new. Lessons have good structure and gives a lot
                of coding practice.
              </p>
              <a
                href="/work"
                className="btn btn-branding"
                title="Work of Katrin Pavlova"
              >
                See my projects
              </a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src={photo}
                alt="Photo of Katrin Pavlova"
                className="img-fluid"
              />
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

export default About;
