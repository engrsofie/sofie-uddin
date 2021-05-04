import React, { useEffect } from 'react';
import image from '../../../images/sofie.jpg'
import './Profile.css'
import Aos from "aos";
import Typewriter from 'typewriter-effect'

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
        <div className="text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("MD Sofie Uddin Sohel")
                .pauseFor(2000)
                .deleteAll()
                .typeString("MD Sofie Uddin Sohel")
                .start();
            }}
          />
        </div>
        <h5>I'M A MERN STACK DEVELOPER</h5>
        <p>
          Currently, I'm working In a Software Company Named Quixx Project. I'm
          a M E R N stack Developer. 40+ Project Completed and have well
          knowledged in React, Next Js,React Native, MongoDB, Express Js.
        </p>
        <h6>Phone logo (+880 1926385012)</h6>
        <h6>email logo (engrsofie@gmail.com)</h6>
        <h6>Location logo (Dhaka, BD)</h6>
        (logo linked in), (logo FB), (logo Github)
      </div>
    </div>
  );
};

export default Profile;