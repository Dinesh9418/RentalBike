import React from "react";
import "./BikeRent.css";
import MT from "../../Assets/Images/MT.jpg";
import Bullet from "../../Assets/Images/bullet.jpg";
import Raider from "../../Assets/Images/Raider.jpg";
import FZ from "../../Assets/Images/FZ.jpg";

const bikeData = [
  {
    id: 1,
    title: "Yamaha MT-15",
    Price: "Rent Starting from ₹50/Hrs",
    img: MT,
  },
  {
    id: 2,
    title: "Bullet Classic 350",
    Price: "Rent Starting from ₹50/Hrs",
    img: Bullet,
  },
  {
    id: 3,
    title: "TVS Raider 125",
    Price: "Rent Starting from ₹50/Hrs",
    img: Raider,
  },
  {
    id: 2,
    title: "Yamaha FZ V3",
    Price: "Rent Starting from ₹50/Hrs",
    img: FZ,
  },
  {
    id: 1,
    title: "Yamaha MT-15",
    Price: "Rent Starting from ₹50/Hrs",
    img: MT,
  },
  {
    id: 3,
    title: "TVS Raider 125",
    Price: "Rent Starting from ₹50/Hrs",
    img: Raider,
  },
];
console.log(bikeData.map((i) => i.id));

const BikeRent = () => {
  return (
    <div className="bikeRent-main">
      {bikeData.map((item, index) => {
        return (
          <div>
            <div class="card" style={{ width: "20rem" }}>
              <img
                class="bikeRent_img card-img-top"
                src={item.img}
                alt="Card image cap"
                style={{ height: "35vh" }}
              />
              <div class="card-body">
                <h3 class="card-title">{item.title}</h3>
                <p class="card-text">{item.Price}.</p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BikeRent;
