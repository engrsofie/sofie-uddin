import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import css from "./Contact.css";
import { FaPhoneAlt, FaMailBulk, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      
   
    <div className="row ">
      <div className="col-md-4">
        <Card className="text-center m-3">
          <Card.Body className="logo-design mt-">
            <h1 className="text-info">
              <FaMailBulk />
            </h1>
            <Card.Title>EMAIL</Card.Title>
            <small>engrsofie@gmail.com</small>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card className="text-center m-3">
          <Card.Body>
            <h1 className="text-info">
              <FaPhoneAlt />
            </h1>
            <Card.Title>PHONE</Card.Title>
            <small>+880 1521583292</small>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card className="text-center m-3">
          <Card.Body>
            <h1 className="text-info">
              <FaLocationArrow />
            </h1>
            <Card.Title >LOCATION</Card.Title>
            <small>Dhaka, Bangladesh</small>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Contact;
