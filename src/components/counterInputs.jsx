import { render } from "@testing-library/react";
import { useState } from "react";
import { Counter } from "./counters";
export const AddCtr = () => {
  const [initialInput, setInitial] = useState();
  const [minInput, setMin] = useState();
  const [maxInput, setMax] = useState();
  return (
    <>
      <div>
        <h3>make your own regular counter</h3>
        <input
          placeholder="starting point"
          type="number"
          name="counter-form"
          id="counter-initial"
          onInput={(e) => setInitial(Number(e.target.value))}
        />
        <input
          placeholder="min number"
          type="number"
          name="counter-form"
          id="counter-min"
          onInput={(e) => setMin(Number(e.target.value))}
        />
        <input
          placeholder="max number"
          type="number"
          name="counter-form"
          id="counter-max"
          onInput={(e) => setMax(Number(e.target.value))}
        />
        <button
          onClick={() => {
            minInput <= initialInput
              ? render(
                  <Counter
                    min={minInput}
                    max={maxInput}
                    initial={initialInput}
                    steps={1}
                  />
                )
              : alert("min number must be equal to or less than initial value");
          }}
        >
          add counter
        </button>
      </div>
    </>
  );
};
