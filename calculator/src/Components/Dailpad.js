import React, { useState } from 'react';
import './Dailpad.css';

const Dailpad = (props) => {
  const [screen, setScreen] = useState('');
  const clickHandler = (event) => {
    setScreen(screen.concat(event.target.value));
  };
  const clearDisplay = () => {
    setScreen('');
  };
  const handleDelete = () => {
    setScreen(screen.substring(0, screen.length - 1));
  };
  const calculate = () => {
    setScreen(eval(screen).toString());
  };
  const handlePercentage = () => {
    setScreen((eval(screen) / 100).toString());
  };
  return (
    <>
      <h1>CALCULATOR</h1>
      <div className="whole">
        <div className="screen">
          <input type="text" placeholder="0" value={screen} disabled="true" />
        </div>
        <div className="one">
          <input
            type="button"
            className="button"
            value={props.clear}
            onClick={clearDisplay}
          />
          <input
            type="button"
            className="button"
            value={props.percentage}
            onClick={handlePercentage}
          />
          <input
            type="button"
            className="button"
            value={props.delete}
            onClick={handleDelete}
          />
          <input type="button" className="button" value={props.divide} />
        </div>
        <div className="two">
          <input
            type="button"
            className="button"
            value={props.value - 2}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.value - 1}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.value}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.multiply}
            onClick={clickHandler}
          />
        </div>
        <div className="three">
          <input
            type="button"
            className="button"
            value={props.value - 5}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.value - 4}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.value - 3}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.subtract}
            onClick={clickHandler}
          />
        </div>
        <div className="four">
          <input
            type="button"
            className="button"
            value={props.value - 8}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.value - 7}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.value - 6}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.add}
            onClick={clickHandler}
          />
        </div>
        <div className="five">
          <input
            type="button"
            className="button"
            value={props.doubleZero}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.zero}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.decimal}
            onClick={clickHandler}
          />
          <input
            type="button"
            className="button"
            value={props.equal}
            onClick={calculate}
          />
        </div>
      </div>
    </>
  );
};

export default Dailpad;
