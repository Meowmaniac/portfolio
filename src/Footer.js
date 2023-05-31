import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
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
                title="LinkedIn profile"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://t.me/Meowmaniac"
                target="_blank"
                title="Telegram message"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <p className="text-center">
            <a
              href="https://github.com/Meowmaniac/portfolio"
              target="_blank"
              alt="Source code"
            >
              Open source code
            </a>{" "}
            by Katrin Pavlova
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
