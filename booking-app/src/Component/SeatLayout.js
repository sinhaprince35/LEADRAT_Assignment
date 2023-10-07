import React from "react";
import "./seatLayout.css";

const SeatLayout = () => {
  return (
    <div>
      <h4>Key to Seat Layout:</h4>
      <div className="layout">
        <div>
          <img src="./seat.svg" alt="logo" />
        </div>
        <p>Available</p>
        <div></div>
      </div>
      <div className="layout">
        <div>
          <img src="./seat1.png" alt="logo"/>
        </div>
        <p>Unavailable</p>
        <div></div>
      </div>
      <div className="layout">
        <div>
          <img src="./seat2.png" alt="logo"/>
        </div>
        <p>Your Selection</p>
        <div></div>
      </div>
    </div>
  );
};

export default SeatLayout;
