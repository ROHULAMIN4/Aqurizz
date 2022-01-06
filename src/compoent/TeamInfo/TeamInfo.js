import React from "react";
import "./TeamInfo.css";
const TeamInfo = () => {
  return (
    <>
      <h1 className="team-member">Our Team Member</h1>
      <div className="row">
        <div class="section col-lg-3 col-md-6 col-sm-12">
          <div class="box">
            <div class="content">
              <img
                src="https://i.postimg.cc/MGHYd0py/20190919065848-IMG-5537-01.jpg"
                alt=""
              />
              <h1>Rohul Amin</h1>
              <h2>Mern stack developer</h2>
              <p>rohulamin131650@gmail.com</p>
            </div>
          </div>
        </div>
        {/* nahar */}
        <div class="section col-lg-3 col-md-6 col-sm-12">
          <div class="box">
            <div class="content">
              <img
                src="https://i.postimg.cc/6Tsn02kv/Kamrun-Nahar.jpg"
                alt=""
              />
              <h1>Kamrun Nahar</h1>
              <h2>Mern stack developer</h2>
              <p>knahar.kamrun@gmail.com</p>
            </div>
          </div>
        </div>
        {/* feroz */}
        <div class="section col-lg-3 col-md-6 col-sm-12">
          <div class="box">
            <div class="content">
              <img src="https://i.ibb.co/XFgKYYk/Ferojdm.jpg" alt="" />
              <h1>Feroj Alam</h1>
              <h2>Mern stack developer</h2>
              <p>feroj.web@gmail.com</p>
            </div>
          </div>
        </div>
        {/* mahfuz */}
        <div class="section col-lg-3 col-md-6 col-sm-12">
          <div class="box">
            <div class="content">
              <img src="https://i.postimg.cc/GtMg2S7x/86846665-1.jpg" alt="" />
              <h1> Mahfujur Rahman</h1>
              <h2>Mern stack developer</h2>
              <p>mahfujur0135@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamInfo;
