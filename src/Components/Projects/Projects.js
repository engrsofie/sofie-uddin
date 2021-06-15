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
        <h1> <span className="text-warning"> MY LATEST </span> FEATURED PROJECT </h1>
        <h6 className="mt-3"> Here are my top three projects </h6>
      </div>
      <div className="row card-size mt-5">
        <div className="col-md-4 ">
          <Card >
            <Card.Img variant="top" src={project1}/>
            <Card.Body>
              <Card.Title>Cleaning Service</Card.Title>
              <Card.Text>
              <div class="ex1">Time has gone when you need to pay for both sides even if you just need one way drop taxi. Technology has enabled us now to have a much integrated network to serve different customers with one way taxi and on return journey. Our aim is to provide customer-satisfied Airport Taxi Service in Tamilnadu at the best prices in the market. No matter, if it is Airport pick-ups and drops or a leisure trip, we have a wide range of clean and well-maintained vehicles for all your needs.Winning the booking can be a very competitive battle for cleaning businesses. Often times, it’s a company’s online presence that can make the difference and win the booking. Below are 15 examples of great cleaning websites that get it right.

While it’s easy for small business owners to start a cleaning company, larger incumbent players can often win a lot of market share with great customer service, name recognition, and a spectacular website. Especially one that offers online booking.

We’ve mixed it up a bit for some variety. You’ll find maid services, carpet cleaners, window washers, odd jobbers, and even a chimney sweep on the list. You can take inspiration from all of them.</div>

              </Card.Text>
              <Button variant="primary"> <FaDownload/> Live Link</Button>
              <Button variant="primary"> <FaDownload/> Code Link</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card >
            <Card.Img
              variant="top"
              src={project2}
            />
            <Card.Body>
              <Card.Title>Bike BD</Card.Title>
              <Card.Text>
              <div class="ex1"> The trend and popularity of motorbikes is increasing day by day in Bangladesh. Surprisingly, not only the young generation but also middle age even an increasing number of older pupils are considering having a bike rather than car. The trend is much higher in the capital Dhaka. The most obvious reason behind that is, the amount of traffic in the roadsThe internet of Bangladesh is in the developing condition. Therefore, the numbers of stable, trusted and good quality online marketplaces are limited. When we specify it to the vehicles or bike marketplaces it is much harder to find. After doing a vast research, the only professional and trusted Bangladeshi marketplace for vehicles we found is carmudi.com.bd. But it is actually a good sign because few years ago we couldn’t think of a marketplace like this.
</div>
              </Card.Text>
              <Button variant="primary"> <FaDownload/> Live Link</Button>
              <Button variant="primary"> <FaDownload/> Code Link</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card >
            <Card.Img
              variant="top"
              src={project3}
            />
            <Card.Body>
              <Card.Title>Inter City Riders</Card.Title>
              <Card.Text>
              <div class="ex1"> Time has gone when you need to pay for both sides even if you just need one way drop taxi. Technology has enabled us now to have a much integrated network to serve different customers with one way taxi and on return journey. Our aim is to provide customer-satisfied Airport Taxi Service in Tamilnadu at the best prices in the market. No matter, if it is Airport pick-ups and drops or a leisure trip, we have a wide range of clean and well-maintained vehicles for all your needs.No Return fare! Why need to pay more for one way Taxi, We're the most trusted one way taxi service in TamilNadu.Your pick-up address can be anywhere in pick-up city and drop address can be anywhere in destination city including Airport.</div>
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
