import { React, useState } from 'react';
import Input from './input';
import Clock from './clock';

export default function App() {
  const [activeSeconds, updateActiveSeconds] = useState(0);
  const [restSeconds, updateRestSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  return (
    <div className="flex-container">
      {console.count('render')}
      <div className="row col-6">
        <Clock
          timerRunning={timerRunning}
          activeSeconds={activeSeconds}
          updateActiveSeconds={updateActiveSeconds}
          restSeconds={restSeconds}
          updateRestSeconds={updateRestSeconds}
          setTimerRunning={setTimerRunning}
        />
      </div>
      <div className="row flex-column justify-evenly col-6">
        <Input updateSecondsFunc={updateActiveSeconds}></Input>
        <Input updateSecondsFunc={updateRestSeconds}></Input>
      </div>
    </div>
  );
}
