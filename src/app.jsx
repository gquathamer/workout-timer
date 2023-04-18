import { React, useState } from 'react';
import Input from './input';
import Clock from './clock';

export default function App() {
  const [seconds, updateSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  return (
    <div className="flex-container">
      {console.count('render')}
      <div className="row col-6">
        <Clock
          timerRunning={timerRunning}
          seconds={seconds}
          updateSeconds={updateSeconds}
          setTimerRunning={setTimerRunning}
        />
      </div>
      <div className="row col-6">
        <Input updateSeconds={updateSeconds}></Input>
      </div>
    </div>
  );
}
