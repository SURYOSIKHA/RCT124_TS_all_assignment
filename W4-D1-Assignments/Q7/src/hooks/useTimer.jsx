import { useState, useRef } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
  };

  // Stop the timer
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTimer(0);
  };

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
}

export default useTimer;
