import React, { useEffect } from 'react';
import image from '../../../images/sofie.jpg'
import './Profile.css'
import Aos from "aos";
import Typewriter from 'typewriter-effect'
import { FaLinkedin, FaFacebook, FaGithub, FaLocationArrow, FaMailBulk, FaPhoneSquareAlt } from 'react-icons/fa';

const Profile = () => {
  useEffect(() =>{
  Aos.init({ duration: 3000 });
  },[])

  return (
    <div className="row">
      <div className="profile-pic col-md-6">
        <div data-aos="zoom-in">
          <img src={image} alt="" />
        </div>
      </div>
      <div data-aos="zoom-in" className="col-md-6">
        <small>HELLO EVERYBODY, I AM</small>
       <h1>MD Sofie Uddin Sohel</h1>
        <div className="text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I'M WEB STACK DEVELOPER")
                .pauseFor(2000)
                .deleteAll()
                .typeString("I'M JS Lover ❣️")
                .start();
            }}
          />
        </div>
        <p>
          I'm a M E R N stack Developer. 40+ Project Completed and have well
          knowledged in React, Next Js,React Native, MongoDB, Express Js.
        </p>
        <h5> <FaPhoneSquareAlt/> +88 01926385012</h5>
        <h5> <FaMailBulk/> engrsofie@gmail.com </h5>
        <h5><FaLocationArrow/> Dhaka, BD</h5>
            <h1 className='p-3'><a href="www.linkedin.com/in/engrsofie" target="_blank"> <FaLinkedin/></a> <a href="https://www.facebook.com/sohel724/" target="_blank"> <FaFacebook/></a> <a href="https://github.com/engrsofie" target="_blank"> <FaGithub/></a></h1>
      </div>
    </div>
  );
};

export default Profile;