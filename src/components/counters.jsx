import { useState } from "react";
// import { AddClrdCtr } from "./counterInputs";

export const Counter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initial = 0,
  steps = 1,
}) => {
  const [counter, setCounter] = useState(initial);

  const addCondition = min <= counter && counter < max;
  const subCondition = min < counter && counter <= max;

  const add = () => {
    if (addCondition) {
      setCounter((counter) => counter + steps);
    }
  };
  const sub = () => {
    if (subCondition) {
      setCounter((counter) => counter - steps);
    }
  };
  return (
    <div>
      <h3>counter</h3>
      <button
        disabled={!addCondition}
        onClick={() => {
          add();
        }}
      >
        count up
      </button>
      <button
        disabled={!subCondition}
        onClick={() => {
          sub();
        }}
      >
        count down
      </button>
      <div>
        <span>{counter}</span>
      </div>
    </div>
  );
};

export const ColoredCounter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initial = 1,
  steps = 1,
  boundaries = [],
}) => {
  console.log(boundaries);
  const [counter, setCounter] = useState(initial);

  const boundary = boundaries.find(
    ({ from, to }) => from <= counter && to >= counter
  );
  const color = boundary ? boundary.color : "";

  const addCondition = min <= counter && counter < max;
  const subCondition = min < counter && counter <= max;

  const add = () => {
    if (addCondition) {
      setCounter((counter) => counter + steps);
    }
  };
  const sub = () => {
    if (subCondition) {
      setCounter((counter) => counter - steps);
    }
  };
  return (
    <div>
      <h3>colored counter</h3>
      <button
        disabled={!addCondition}
        onClick={() => {
          add();
        }}
      >
        count up
      </button>
      <button
        disabled={!subCondition}
        onClick={() => {
          sub();
        }}
      >
        count down
      </button>
      <div>
        <span style={{ color: color }}>{counter}</span>
      </div>
    </div>
  );
};
