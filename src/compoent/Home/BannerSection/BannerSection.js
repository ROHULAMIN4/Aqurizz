import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BannerSecton.css";
const BannerSection = () => {
  // style={{ backgroundImage: `url()`, height: "400px", backgroundSize: 'cover', width: '50%' }}
  return (
    <section className="container-lg banner-section mt-5 mb-5">
      <Row>
        <Col lg={6} xs={12} className="p-0">
          <img
            className="sectionbanner"
            width="89%"
            height="416"
            style={{ marginLeft: "60px" }}
            src="https://i.postimg.cc/6p05PrjX/image-4.jpg"
            alt="bannerImg"
          />
        </Col>
        <Col lg={6} xs={12}>
          <article className="d-flex">
            <p
              className="d-none d-xl-block"
              style={{
                color: "#2AA2B0",
                transform: "rotate(270deg)",
                fontWeight: 500,
                width: "50px",
              }}
            >
              - Installation
            </p>
            <h2 style={{ color: "#403535", fontWeight: 700 }}>
              Aquarium Design, <br /> Manufacture,{" "}
              <br className="d-none d-md-block" /> Installation
            </h2>
          </article>

          <article className="ms-xl-5">
            <p
              style={{
                margin: "1.4em 0",
                color: "#8c8686",
                fontFamily: "roboto",
                width: "70%",
              }}
            >
              The AquaPro have created some of the most stylish and luxury
              bespoke built aquariums and fish tanks in the country. We draw on
              over 25 years of expertise in designing, manufacturing and
              installing aquariums.
            </p>

            {/* <button
              style={{
                border: "2px solid #2AA2B0",
                color: "#2AA2B0",
                padding: "10px 25px",
                fontSize: "13px",
                fontWeight: "bold",
                background: "#fff",
                marginTop: 10,
              }}
            >
              MORE INFO
            </button> */}
          </article>
        </Col>

        <Col lg={6} xs={12} className="order-1 order-lg-0">
          <article
            className="d-flex mt-5 aquarium-maintaince-banner"
            style={{ marginLeft: 110 }}
          >
            <p
              className="d-none d-xl-block"
              style={{
                color: "#2AA2B0",
                transform: "rotate(270deg)",
                fontWeight: 500,
                width: "50px",
                marginTop: 50,
              }}
            >
              Maintenance
            </p>
            <h2 style={{ color: "#403535", fontWeight: 700 }}>
              Aquarium Maintenance <br /> Services
            </h2>
          </article>

          <article
            style={{ marginLeft: "160px" }}
            className="mb-5 mb-lg-0 aquarium-maintaince-banner"
          >
            <p
              style={{
                margin: "1.4em 0",
                color: "#8c8686",
                fontFamily: "roboto",
                width: "95%",
              }}
            >
              With over 30 years in the business and nationwide coverage we are
              one of the foremost aquarium and fish tank maintenance companies
              in New Jersey.
            </p>

            {/* <button
              style={{
                border: "2px solid #2AA2B0",
                color: "#2AA2B0",
                padding: "10px 25px",
                fontSize: "13px",
                fontWeight: "bold",
                background: "#fff",
                marginTop: 10,
              }}
            >
              MORE INFO
            </button> */}
          </article>
        </Col>
        <Col lg={6} xs={12} className="p-0 mt-5 mt-lg-0">
          <img
            className="sectionbanner"
            width="89%"
            height="416"
            style={{ marginTop: "-2px", marginLeft: "-15px" }}
            src="https://i.ibb.co/H2vqTV0/image-6.jpg"
            alt=""
          />
        </Col>
      </Row>
    </section>
  );
};

export default BannerSection;
