import React from "react";
import './Project.css'
import { Card, Button } from "react-bootstrap";
import project1 from "./image/Capture1.PNG"
import project2 from "./image/Capture2.PNG"
import project3 from "./image/Capture3.PNG"
import { FaDownload } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center">
        <h1> MY LATEST FEATURED PROJECT </h1>
        <h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
      </div>
      <div className="row card-size">
        <div className="col-md-4 ">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={project1}/>
            <Card.Body>
              <Card.Title>Cleaning Service</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"> <FaDownload/> Live Link</Button>
              <Button variant="primary"> <FaDownload/> Code Link</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={project2}
            />
            <Card.Body>
              <Card.Title>Bike BD</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"> <FaDownload/> Live Link</Button>
              <Button variant="primary"> <FaDownload/> Code Link</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={project3}
            />
            <Card.Body>
              <Card.Title>Inter City Riders</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"> <FaDownload/> Live Link</Button>
              <Button variant="primary"> <FaDownload/> Code Link</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
