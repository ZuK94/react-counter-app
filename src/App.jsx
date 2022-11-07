// 1. create a new project with bootstrap and bootstrap icons
// 2. create a component called "counter"
// 2.1 counter should receive the following props
// - min = Number.MIN_SAFE_INTEGER
// - max = Number.MAX_SAFE_INTEGER
// - initial = 0
// - steps = 1
// 2.3 the + button will add steps to current counter's state and will be disabled at max
// 2.4 the - button will substract steps from current counter's state and will be disabled at min

// BONUS
// (includes new stuff) - create a component with inputs for min, max, initial, steps and a button which with each click will add a new counter based on the configurations
// - receive array of objects
// { from: 15, to: 10, color: "red"}

import "./App.css";
import { ColoredCounter, Counter } from "./components/counters";
import { AddCtr } from "./components/counterInputs";

function App() {
  return (
    <div className="App">
      {" "}
      <Counter />
      <ColoredCounter
        boundaries={[
          {
            from: 5,
            to: 10,
            color: "red",
          },

          {
            from: 10,
            to: 15,
            color: "green",
          },

          {
            from: 15,
            to: 20,
            color: "blue",
          },
        ]}
      />
      <AddCtr />
    </div>
  );
}

export default App;
