import React from "react";
import photo from "../images/me.jpg";
import Footer from "../Footer";

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
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
