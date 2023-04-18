import { React, useEffect } from 'react';
import PropType from 'prop-types';

export default function Clock({
  timerRunning,
  seconds,
  updateSeconds,
  setTimerRunning,
}) {
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          updateSeconds(seconds => seconds - 1);
        }
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
    <>
      <div className="clock-container">
        <p>{seconds}</p>
      </div>
      <div className="full-flex text-center">
        <button onClick={clickMe}>Click</button>
      </div>
    </>
  );
}

Clock.propTypes = {
  timerRunning: PropType.boolean,
  seconds: PropType.number,
  updateSeconds: PropType.func,
  setTimerRunning: PropType.func,
};
