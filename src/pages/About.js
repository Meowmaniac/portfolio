import React from "react";
import photo from "../images/photo.jpg";
import Footer from "../Footer";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="content-container container">
          <h2 className="text-center">About me</h2>
          <p className="text-center ">
            My name is Katrin, I am from Ukraine, currently based in the
            Netherlands. I'm looking for a new start in career.
          </p>
          <div className="row mb-5 mt-5">
            <div className="col-lg-7 col-sm-12">
              <p>
                I hold a Master's degree in Software Engineering, which has
                provided me with a comprehensive understanding of the
                theoretical and practical aspects of this dynamic field.
                Throughout my educational journey, I delved into various
                subjects related to software development, including object
                oriented design, software architecture, algorithms, data
                structures, and software testing. The program equipped me with a
                solid foundation in programming languages, such as Java, C#,
                Python and C++, and honed my skills in software design and
                development methodologies.
              </p>
              <p>
                Recently I refreshed my knowledge by completing courses by
                SheCodes, I have acquired a comprehensive understanding of
                front-end technologies. Proficient in HTML, CSS, and JavaScript,
                I possess the ability to transform designs into pixel-perfect,
                responsive web pages. Additionally, I have experience working
                with React framework, enabling me to build dynamic and
                interactive web applications.
              </p>
              <p>
                What truly fuels my passion is the opportunity to bring ideas to
                life through coding. I love the creative process of translating
                concepts into functional software that leave a lasting impact.
              </p>
              <p>
                Outside of development, I have a lot of interests like playing
                guitar, making paper models, mountain hiking, traveling. Also I
                am and I found an opportunity to make this hobby work. I spent
                some time making money from live streaming and later I become an
                account seller. I was a leader of a small team and we provided
                different services to other gamers. I enjoyed this period of
                time spent in fun and profitable way of playing games. I think
                the ideal job is one that brings pleasure and money at the same
                time.
              </p>
              <p>
                Thank you for visiting my portfolio! I am excited to connect
                with like-minded individuals and organizations that share the
                same enthusiasm for pushing boundaries and crafting remarkable
                online experiences. Let's collaborate and bring our ideas to
                life!
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
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
