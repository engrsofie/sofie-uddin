import React, { useEffect } from 'react';
import { ProgressBar } from "react-bootstrap";
import Aos from "aos";

const About = () => {
  useEffect(() =>{
  Aos.init({ duration: 3000 });
  },[])
  
    return (
      <div className="mt-5 row">
        <div className="col-md-6">
          <div data-aos="fade-right">
          <h1>ABOUT MYSELF</h1>
          <p>
            I'm a Javascript Enthusiast. Love to working in Javascript Ecosystem
            speacially React, Next Js, React Native. I'm a technology explorer
            and learner. I love to learn new technology and explore it. Becoming
            a Full-Stack software engineer is my goal. I'm a simply simple
            person with lots of interests.
          </p>
          <button className="btn-btn btn-primary"> HIRE ME </button>
          <br /> <br />
          <button className="btn-btn btn-primary"> HIRE ME </button>
        </div>
        </div>

        <div className="col-md-6">
          <div data-aos="fade-left">
          HTML 80%
          <ProgressBar striped bsStyle="success" now={80} />
          CSS 80%
          <ProgressBar striped bsStyle="success" now={70} />
          BootStrap 80%
          <ProgressBar striped bsStyle="success" now={75} />
          Javascript 70%
          <ProgressBar striped bsStyle="success" now={70} />
          React 75%
          <ProgressBar striped bsStyle="success" now={65} />
          NodeJs 60%
          <ProgressBar striped bsStyle="success" now={70} />
          MongoDB 70%
          <ProgressBar striped bsStyle="success" now={75} />
          <br />
          <br />
        </div>
        </div>
      </div>
    );
};

export default About;