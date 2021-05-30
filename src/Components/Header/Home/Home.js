import React from 'react';
import './Home.css'
import Nav from "react-bootstrap/Nav";
import logo from "./image/S-logo.PNG";
const Home = () => {
    return (
      
        <Nav className="justify-content-end p-4">
          <img variant="top" src={logo}/> 
          <Nav.Item className='nav-style' >
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>   
          <Nav.Item className='nav-style'>
          <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>

          <Nav.Item className='nav-style'>
            <Nav.Link eventKey="link-2">Blogs</Nav.Link>
          </Nav.Item>

          <Nav.Item className='nav-style'>
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>

          <Nav.Item className='nav-style'>
            <Nav.Link eventKey="link-2">About</Nav.Link>
          </Nav.Item>
          <a href="https://drive.google.com/u/0/uc?id=1S_ZUkpyUSY8ooY6mmhq-1BVSBbidjkLB&export=download" target="_blank"> <button class=" ms-4 btn btn-primary btn-lg disabled"> RESUME </button> </a>
        </Nav>
    );
};

export default Home;