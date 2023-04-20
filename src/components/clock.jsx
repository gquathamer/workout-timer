import { React, useEffect } from 'react';
import PropType from 'prop-types';

export default function Clock({
  timerRunning,
  activeSeconds,
  updateActiveSeconds,
  restSeconds,
  updateRestSeconds,
  setTimerRunning,
}) {
  useEffect(() => {
    let interval = null;
    let restInterval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        if (activeSeconds > 0) {
          updateActiveSeconds(seconds => seconds - 1);
        }
      }, 1000);
    } else {
      restInterval = setInterval(() => {
        if (restSeconds > 0 && !timerRunning && activeSeconds < 1) {
          updateRestSeconds(seconds => seconds - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      clearInterval(restInterval);
      if (activeSeconds === 1 && timerRunning) {
        setTimerRunning(false);
      }
    };
  }, [timerRunning, activeSeconds, restSeconds]);

  function clickMe() {
    setTimerRunning(!timerRunning);
  }

  return (
    <>
      <div className="clock-container">
        <p>{activeSeconds}</p>
        <hr />
        <p>{restSeconds}</p>
      </div>
      <div className="full-flex text-center">
        <button
          style={{ backgroundColor: timerRunning ? 'green' : 'red' }}
          onClick={clickMe}
        >
          Click
        </button>
      </div>
    </>
  );
}

Clock.propTypes = {
  timerRunning: PropType.bool,
  activeSeconds: PropType.number,
  updateActiveSeconds: PropType.func,
  restSeconds: PropType.number,
  updateRestSeconds: PropType.func,
  setTimerRunning: PropType.func,
};
