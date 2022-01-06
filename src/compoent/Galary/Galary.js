import React from "react";
import { Container } from "react-bootstrap";
import "../About/About.css";

const Gallary = () => {
  return (
    <Container className="mt-5 mb-5">
      <h6
        className="text-center"
        style={{ color: "#2AA2B0", fontFamily: "Leckerli One,cursive" }}
      >
        Our Projects
      </h6>
      <h1 className="text-center fw-bold mb-4">GALLERY</h1>

      <article className="row">
        <div className="col-lg-6">
          <div className="col">
            <div className="col-lg-12">
              <img
                className="aquriam-image"
                height="336"
                width="630"
                src="  https://i.postimg.cc/W16Gcwsb/image-39-copyright.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-12" style={{ marginTop: 35 }}>
              <img
                className="aquriam-image"
                height="336"
                width="630"
                src="https://i.postimg.cc/kGbS1xjC/image-7-copyright.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid aquriam-image"
            src=" https://i.postimg.cc/c6GnVrjn/image-40-copyright-scaled.jpg"
            alt=""
          />
        </div>

        <div className="col-lg-6 mt-4">
          <img
            className="img-fluid aquriam-image"
            src="https://i.postimg.cc/cHjYBDBT/image-38copyright-1-scaled.jpg"
            alt=""
          />
        </div>

        <div className="col-lg-6">
          <div className="col mt-4">
            <div className="col-lg-12">
              <img
                className="aquriam-image"
                height="295"
                width="636"
                src="https://i.postimg.cc/Bvm2XZ8r/image-1-copyright.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-12" style={{ marginTop: 25 }}>
              <img
                className="aquriam-image"
                height="293"
                width="636"
                src="https://i.postimg.cc/bwXghvbL/image-10-copyright.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Gallary;
