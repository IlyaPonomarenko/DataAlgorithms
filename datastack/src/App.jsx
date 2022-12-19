import { useRef } from "react";
import { useStackState } from "rooks";
import "./App.css";

function App() {
  const numberToPush = useRef(5);
  const [listInReverse, { push, pop }] = useStackState([1, 2, 3, 4, 5]);

  const addToStack = () => {
    numberToPush.current = numberToPush.current + 1;
    push(numberToPush.current);
  };
  return (
    <div>
      <h1>Data stack</h1>
      <div className="stack">
        {listInReverse.map((item) => {
          return (
            <div className="element" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={addToStack}>Push</button>
      <button onClick={pop}>Pop</button>
    </div>
  );
}

export default App;
