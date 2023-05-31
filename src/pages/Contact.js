import React from "react";
import Footer from "../Footer";

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
                href="mailto:evil.cat.software@gmail.com"
                target="_blank"
                title="Email Katrin"
              >
                evil.cat.software@gmail.com
              </a>
            </p>
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/katrin-pavlova/"
                target="_blank"
                title="LinkedIn profile"
              >
                Katrin Pavlova
              </a>
            </p>
            <h3>Telegram</h3>
            <p>
              <a
                href="https://t.me/Meowmaniac"
                target="_blank"
                title="Telegram profile"
              >
                @Meowmaniac
              </a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
