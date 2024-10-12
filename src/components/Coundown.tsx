import React, { useState, useEffect } from "react";
import Result from "./Result";

const Countdown = ({ initialSeconds = 60 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(countdown);
        setIsTimeUp(true); // Set the boolean to true when time is up
      }
    }, 1000);

    return () => clearInterval(countdown); // Clear interval on component unmount
  }, [seconds]);

  return (
    <div className="text-center bg-transparent p-4 rounded-md w-48 mx-auto">
      {!isTimeUp && <h1 className="text-2xl font-bold text-blue-500">
        {seconds}s
      </h1>}
      {isTimeUp && (
        <div className="justify-center bg transparent">
            <p className="text-red-500 font-bold pb-2">Time's up!</p>
            <Result />
        </div>
      )}
    </div>
  );
};

export default Countdown;
