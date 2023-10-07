import "./App.css";
import Seat from "./Component/Seat";
// import SeatLayout from "./Component/SeatLayout";
import TyepQty from "./Component/TyepQty";

function App() {
  return (
    <div className="App">
      <h1>Book My Seat</h1>
      
      <Seat />
      <TyepQty />
      {/* <SeatLayout /> */}
    </div>
  );
}

export default App;
