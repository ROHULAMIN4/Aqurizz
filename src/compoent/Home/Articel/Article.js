import React from "react";

import { Link } from "react-router-dom";
import "./Article.css";
const Article = () => {
  return (
    <div className="main-article">
      <h1>Latest Article</h1>
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-12 hover-block">
          <img
            src="https://i.postimg.cc/cJKyH7bp/image-11-copyright-840x405.jpg"
            alt=""
          />
          <h3>
            AQUARIUM LIGHINT <br /> INFORMATION
          </h3>
          <p>
            Commodo sit, risus et elit, sem non eros morbi, magna amet arcu
            rutrum, vivamus cursus lectus et. Phasellus suspendisse,..
          </p>
          <Link to="right">
            <button className="articleButton">
              Learn More <i class="fas fa-arrow-right ms-1"></i>
            </button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12 hover-block">
          <img
            src="https://i.postimg.cc/25PpBbpV/image-36-copyright-840x405.jpg"
            alt=""
          />
          <h3>
            WHAT KIND OF <br /> AQUARIUM IS RIGHT FOR ME
          </h3>
          <p>
            Varius lobortis, at et, morbi massa at praesent lectus, leo diam.
            Sodales nulla, diam ante ac ac eleifend, nunc...
          </p>
          <Link to="whatKind">
            <button className="articleButton">
              Learn More <i class="fas fa-arrow-right ms-1"></i>
            </button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12 hover-block">
          <img
            className="imgName"
            src="https://i.postimg.cc/Xvx8TtL3/image-6-copyright-840x405.jpg"
            alt=""
          />
          <h3>
            LIPSAME OF <br /> FRESHWATER
          </h3>
          <p>
            A sodales ultricies leo natoque felis turpis, adipiscing turpis amet
            wisi massa, accumsan, ac vehicula elit, volutpat nonummy porta
            dapibus...
          </p>
          <Link to="lipsam">
            <button className="articleButton">
              Learn More <i class="fas fa-arrow-right ms-1"></i>
            </button>
          </Link>
          {/* initial none */}
        </div>
      </div>
    </div>
  );
};

export default Article;
