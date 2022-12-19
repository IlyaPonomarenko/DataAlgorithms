import { useRef } from "react";
import { useQueueState } from "rooks";
import "./App.css";

function App() {
  const numOfElements = useRef(5);
  const [list, { enqueue, dequeue }] = useQueueState([1, 2, 3, 4, 5]);

  const addToQueue = () => {
    numOfElements.current = numOfElements.current + 1;
    enqueue(numOfElements.current);
  };
  return (
    <div>
      <h1>Queue data</h1>
      <div className="stack">
        {list.map((item) => {
          return (
            <div className="element" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={addToQueue}>enqueue</button>
      <button onClick={dequeue}>dequeue</button>
    </div>
  );
}

export default App;
