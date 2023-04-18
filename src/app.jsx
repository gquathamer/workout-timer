import { React, useState, useEffect } from 'react';
import Input from './input';

export default function App() {
  const [seconds, updateSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        updateSeconds(s => s - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, seconds]);

  function clickMe() {
    setTimerRunning(!timerRunning);
  }

  return (
    <div className="flex-container">
      {console.count('render')}
      <div className="row col-6">
        <div className="clock-container">
          <p>{seconds}</p>
        </div>
        <div className="full-flex text-center">
          <button onClick={clickMe}>Click</button>
        </div>
      </div>
      <div className="row col-6">
        <Input updateSeconds={updateSeconds}></Input>
      </div>
    </div>
  );
}
