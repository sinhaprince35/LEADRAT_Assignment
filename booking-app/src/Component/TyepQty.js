import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import "./typeQty.css";

const TyepQty = () => {
  const [ticketType, setTicketType] = useState("Ticket Type");
  const [ticketCount, setTicketCount] = useState("Qty");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  const handleTicketCountChange = (event) => {
    setTicketCount(parseInt(event.target.value, 10));
  };

  const handleProceedClick = () => {
    setSelectedSeats([
      ...selectedSeats,
      ...Array(ticketCount).fill("Unavailable"),
    ]);
    setTicketType("Ticket Type");
    setTicketCount("Qty");
  };

  return (
    <div className="typeQty">
      <Select
        sx={{
          marginTop: 1,
          width: 250,
          height: 50,
          marginRight: 5,
        }}
        id="ticket-type"
        defaultValue="Ticket Type"
        value={ticketType}
        onChange={handleTicketTypeChange}
      >
        <MenuItem value="Ticket Type" disabled>
          Ticket Type
        </MenuItem>
        <MenuItem value="Standard">Standard</MenuItem>
        <MenuItem value="Premium">Premium</MenuItem>
      </Select>
      <Select
        sx={{
          marginTop: 1,
          width: 250,
          height: 50,
          marginRight: 5,
        }}
        id="ticket-quantity"
        defaultValue="Qty"
        value={ticketCount}
        onChange={handleTicketCountChange}
      >
        <MenuItem value="Qty" disabled>
          Qty
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
      </Select>
      <div>
        <button onClick={handleProceedClick}>PROCEED</button>
      </div>
    </div>
  );
};

export default TyepQty;
