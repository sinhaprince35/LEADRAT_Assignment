import React, { useState } from "react";
import "./seat.css";
import SeatLayout from "./SeatLayout";

const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsAvailability, setSeatsAvailability] = useState(
    Array(20).fill(true)
  );

  const handleSeatClick = (index) => {
    if (seatsAvailability[index]) {
      const updatedSeats = [...selectedSeats];
      if (updatedSeats.includes(index)) {
        updatedSeats.splice(updatedSeats.indexOf(index), 1);
      } else {
        updatedSeats.push(index);
      }
      setSelectedSeats(updatedSeats);
    }
  };

  const seat = Array.from({ length: 20 }, (_, index) => (
    <img
      key={index}
      src="./seat.png"
      alt={`seat ${index + 1}`}
      className={`seat ${
        seatsAvailability[index] && !selectedSeats.includes(index)
          ? "available"
          : "unavailable"
      }`}
      onClick={() => handleSeatClick(index)}
    />
  ));

  const seatsInColumn1 = Array.from({ length: 14 }, (_, index) => (
    <img
      key={index}
      src="./seat.png"
      alt={`seat ${index + 1}`}
      className={seatsAvailability[index] ? "available" : "unavailable"}
      onClick={() => handleSeatClick(index)}
    />
  ));

  const seatsInColumn2 = Array.from({ length: 6 }, (_, index) => (
    <img
      key={index}
      src="./seat.png"
      alt={`seat ${index + 1}`}
      className={seatsAvailability[index] ? "available" : "unavailable"}
      onClick={() => handleSeatClick(index)}
    />
  ));

  const seatsInColumn3 = Array.from({ length: 3 }, (_, index) => (
    <img
      key={index}
      src="./seat.png"
      alt={`seat ${index + 1}`}
      className={seatsAvailability[index] ? "available" : "unavailable"}
      onClick={() => handleSeatClick(index)}
    />
  ));

  const seatsInrowQP = Array.from({ length: 2 }, (_, index) => (
    <img
      key={index}
      src="./seat.png"
      alt={`seat ${index + 1}`}
      className={seatsAvailability[index] ? "available" : "unavailable"}
      onClick={() => handleSeatClick(index)}
    />
  ));

  return (
    <div className="MainContainer">
      <div className="scrollableContainer">
        <div className="seatContainer">
          <div className="left">
            <p>Q</p>
          </div>
          <div className="right">
            <div className="column4">{seatsInrowQP}</div>
            <div className="column2">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>{" "}
            <div className="column5">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>
          </div>
          <div className="left">
            <p>P</p>
          </div>
          <div className="right">
            <div className="column4">{seatsInrowQP}</div>
            <div className="column2">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>{" "}
            <div className="column5">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>
            <div className="column5">{seatsInrowQP}</div>
          </div>
          <div className="left">
            <p>N</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>M</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>L</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>K</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>J</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>H</p>
          </div>
          <div className="right">
            <div className="column3">{seatsInColumn3}</div>
            <div className="row-hg">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>G</p>
          </div>
          <div className="right">
            <div className="column3">{seatsInColumn3}</div>
            <div className="row-hg">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>F</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>E</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>D</p>
          </div>
          <div className="right">
            <div className="column1">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>C</p>
          </div>
          <div className="right">
            <div className="column3">{seatsInColumn3}</div>
            <div className="row-hg">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>B</p>
          </div>
          <div className="right">
            <div className="column3">{seatsInColumn3}</div>
            <div className="row-hg">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
          <div className="left">
            <p>A</p>
          </div>
          <div className="right">
            <div className="column3">{seatsInColumn3}</div>
            <div className="row-hg">{seatsInColumn1}</div>
            <div className="column2">{seatsInColumn2}</div>
          </div>
        </div>
      </div>

      <div className="seatLayout">
        <SeatLayout />
      </div>
    </div>
  );
};

export default Seat;
