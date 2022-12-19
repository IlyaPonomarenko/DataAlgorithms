import { useState } from "react";
import "./App.css";

function App() {
  const [array, setEmptyArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([[...array]]);
  
  const handleUserInput = (e) => {
    let inputValue = e.target.value;
    setEmptyArray(inputValue.split(",").map((i) => Number(i)));
  };
  const swap = (arr, first, second) =>{
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  const bubbleSort = (array) => {
    console.log(`Iterations ${array}`)
    if (array.length <= 1) setSortedArray(array);
    let check = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        swap(array, i, i + 1);
        check = true;
      }
    }
    if (!check) {
      setSortedArray(array)
    } else {
      return bubbleSort(array);
    }
  };

  return (
    <div className="container">
      <div>
        <label>
          Bubble sort (input numbers using " , ")
          <input value={array} type="text" onChange={handleUserInput} />
        </label>
        <button onClick={() => bubbleSort(array)}>Sort</button>
      </div>
      <div>Sorted array:{sortedArray}</div>
    </div>
  );
}

export default App;
