import React from 'react'
import { useState, useEffect } from 'react';

function Countdown() {
  const [days, setDays] = useState(0);

  const deadline = "August, 12, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='countdownSection'>
      <div className="countdownContainer">
        <h1 className="countdownDays">{days}</h1>
        <h3 className="days">days</h3>
        <p>to go</p>
      </div>
    </div>
  )
}

export default Countdown
