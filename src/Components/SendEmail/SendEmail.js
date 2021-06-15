import React from 'react';
import { Form } from "react-bootstrap";
import css from "./SendEmail.css"
import Aos from "aos";
import  { useEffect } from 'react';

const SendEmail = () => {

    useEffect(() =>{
        Aos.init({ duration: 3000 });
        },[])

    return (
        <div data-aos="zoom-in" className=" email mt-3 ">
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Full Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email address" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1 ">
    <Form.Label >Type Your Message </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form> 
        </div>
    );
};

export default SendEmail;