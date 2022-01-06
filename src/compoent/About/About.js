import React from "react";
import { Container } from "react-bootstrap";
import Gallary from "../Galary/Galary";
import TeamInfo from "../TeamInfo/TeamInfo";
import "./About.css";

const AboutUs = () => {
  return (
    <>
      {/* header  */}
      <section
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1599492816933-2101fe60bc72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontFamily: "roboto",
            paddingTop: "14%",
          }}
        >
          About us
        </h1>
      </section>

      {/* about text */}
      <section
        style={{
          backgroundImage: `url(https://i.postimg.cc/XqHzNgV5/fish.jpg)`,
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <Container className="mt-5">
          <div className="row align-items-center">
            <div className="col-lg-10 col-xl-6 ">
              <article className="ms-lg-5 about-text ps-lg-5 mt-5 pt-5">
                <p
                  className="d-none d-xl-block mb-0"
                  style={{ color: "#2AA2B0", fontWeight: 500 }}
                >
                  - who we are
                </p>

                <h2
                  className="fw-bold text-dark"
                  style={{ fontSize: "2.118rem" }}
                >
                  Specialists In Custom Fish <br /> Tanks, Luxury Aquarium{" "}
                  <br /> Design And Installation
                </h2>

                <p
                  style={{
                    color: "#8c8686",
                    fontFamily: "roboto",
                    width: "75%",
                    marginTop: 30,
                  }}
                >
                  The AquaPro have created some of the most stylish and luxury
                  bespoke built aquariums and fish tanks in the country. We draw
                  on over 25 years of expertise in designing, manufacturing and
                  installing aquariums.
                </p>

                <button
                  className="banner-button"
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
                </button>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* gallery */}
      <Gallary />
      <TeamInfo></TeamInfo>
    </>
  );
};

export default AboutUs;
