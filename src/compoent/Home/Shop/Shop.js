import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Fish/FIsh.css";
import Fishs from "../Fish/Fish";

const Shop = () => {
  return (
    <section
      style={{ background: "#E9F2FF", width: "100vw", paddingBottom: 100 }}
    >
      <Container className="pt-5">
        <Row>
          <Col lg={6} xs={12}>
            <img
              src="https://i.postimg.cc/R0Wz4yQv/image-41-copyright.jpg"
              alt=""
            />
          </Col>

          <Col lg={6} xs={12} style={{ paddingTop: "100px" }}>
            <h6
              style={{
                fontSize: " 1.333em",
                lineHeight: "1em",
                fontWeight: 400,
                textAlign: "center",
                color: "#EFC12F",
                fontFamily: "Leckerli One,cursive",
              }}
            >
              Our Shop
            </h6>

            <h1
              style={{ fontSize: "3.333em", color: "#06175c", fontWeight: 700 }}
              className="text-center"
            >
              AQUATIC PETS
            </h1>

            <article style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="my-2"
                src="https://i.postimg.cc/Pr53gZMj/Screenshot-4.png"
                alt=""
              />
            </article>

            <p
              style={{
                color: "#626085",
                textAlign: "center",
                marginBottom: "1.67em",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Hundreds of freshwater and saltwater fish available. Wide
              selection of aquatic plants, vines, and corals. Fish food,
              supplements, medication, and other aquarium supplies.
            </p>
          </Col>

          <Col
            lg={12}
            className="fish-container"
            style={{ marginTop: "-180px", marginLeft: "140px" }}
          >
            <Fishs />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Shop;
