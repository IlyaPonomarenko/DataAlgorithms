
import { useMemo, useState } from 'react';
import './App.css';

function App () {
const [word, updateWord] = useState("");
const isPalindromeHandler = useMemo(() =>{
  return word === word.split("").reverse().join("");
}, [word]) 


  return(
    <div className='container'>
      <div>
        <label>Check for a palindrome
        <input value={word} onChange={(e) => updateWord(e.target.value)}/>
        </label>
      </div>
      <div>is palindrome:{isPalindromeHandler ? "Yes" : "No"}</div>
    </div>
  )
}


export default App;
