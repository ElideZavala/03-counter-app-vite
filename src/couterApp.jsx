import PropTypes from "prop-types";
import { useState } from "react";

const handle = (e) => {
  console.log(e);
};
const CouterApp = ({ value = 10 }) => {
  console.log("render");

  let [counter, setCounter] = useState(value);
  const style = () => {
    if (counter > 10) {
      return {
        color: "red",
      };
    } else {
      return {
        color: "green",
      };
    }
  };

  return (
    <>
      <h1 style={style()}>
        CounterApp
        <span>{counter}</span>
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(value)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={handle}>Evento</button>
    </>
  );
};

export default CouterApp;

CouterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
