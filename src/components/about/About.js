import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-main">
      <div className="main-wrapper">
        <h1>
          Why <span>Choose</span> Us ?
        </h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur,
        </p>
      </div>
      <div className="about-card">
        <div className="about-card_1">
          <div>
            <p>ICON</p>
          </div>
          <div>
            <h3>24 Hrs Support</h3>
            <p>
              {" "}
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur,
            </p>
          </div>
        </div>
        <div className="about-card_2"><div>
          <p>ICON</p>
        </div>
          <div>
            <h3>Best Price</h3>
            <p>
              {" "}
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur,
            </p>
          </div></div>
        <div className="about-card_3"><div>
          <p>ICON</p>
        </div>
          <div>
            <h3>Verified License</h3>
            <p>
              {" "}
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur,
            </p>
          </div></div>
        <div className="about-card_4"><div>
          <p>ICON</p>
        </div>
          <div>
            <h3>Free Cancellation</h3>
            <p>
              {" "}
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur,
            </p>
          </div></div>
      </div>
    </div>
  );
};

export default About;
