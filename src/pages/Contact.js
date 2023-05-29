import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="content-container container">
          <div className="content text-center">
            <h1 className="mb-5">Lets get in touch!</h1>
            <h3>Email</h3>
            <p>
              <a
                href="mailto:katrin@mail.com"
                target="_blank"
                title="Email Katrin"
              >
                katrin@mail.com
              </a>
            </p>
            <h3>Twitter</h3>
            <p>
              <a
                href="http://twitter.com/meowmeow"
                target="_blank"
                title="Twitter profile"
              >
                @meowmeow
              </a>
            </p>
            <h3>Instagram</h3>
            <p>
              <a
                href="http://instagram.com/meowmeow"
                target="_blank"
                title="Instagram profile"
              >
                @katrinmeow
              </a>
            </p>
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

export default Contact;
