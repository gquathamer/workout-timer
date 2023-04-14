import { useState, useEffect } from "react";


export default function App() {
  const [seconds, updateSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerRunning) {
      interval = setInterval(() => {
        updateSeconds(s => s + 2);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [timerRunning]);

  function clickMe() {
    setTimerRunning(!timerRunning);
  }

  return (
    <>
      <div className="row">
      <div className="clock-container">
        {seconds}
      </div>
      </div>
      <div className="row">
        <button onClick={clickMe}>Click</button>
      </div>
    </>
  )
}
