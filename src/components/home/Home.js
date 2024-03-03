import React from "react";
import "./Home.css";
import Bike from "../../Assets/Images/bike.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home_1">
        <h1 className="home_1_heading">
          Easy And Fast Way To <span className="home_1_span">Rent</span> Your
          Car
        </h1>
        <p className="home_1_loream">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.Lorem Ipsum has been the industry standard dummy text ever
          since the 1500.
        </p>
        <Link to="/bikerent">
          <button type="button" class="btn btn-primary">
            Rent Bike
          </button>
        </Link>
      </div>
      <div className="home_2">
        <img className="home_2_img" src={Bike} alt="bike_img" />
      </div>
    </div>
  );
};

export default Home;
