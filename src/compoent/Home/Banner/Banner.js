import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="cover-banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 Banner"
            src="https://i.postimg.cc/x1B5K0Nc/david-clode-ekthr-VC-DVs-unsplash.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3 className="text-warning">Cory Catfish</h3>
            <p>
              Cory Catfish are one of the most popular species in freshwater
              fish-keeping.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Banner"
            src="https://i.postimg.cc/k4mypfcC/david-clode-KMr-YZp6ismc-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-warning">Swordtails</h3>
            <p>
              Swordtails are easy to keep and thrive in a wide range of
              environments. If kept in groups, Swordtails will also reproduce
              very quickly.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Banner"
            src="https://i.postimg.cc/XvF8LT9x/david-clode-l-Qd-JMZX7-PU-unsplash.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-warning">African Cichlids</h3>
            <p>
              The term “African Cichlid” is a blanket term that includes tons of
              different Cichlid species and some of the most popular include the
              Yellow Lab Cichlid, Peacock Cichlid, and Zebra Cichlid.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
