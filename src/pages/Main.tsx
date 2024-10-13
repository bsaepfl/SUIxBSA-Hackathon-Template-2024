import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Graphic from '../components/Graphic';
import Bottom from '../components/Bottom';
import Result from '../components/Result';

const Home = () => {

  const data = [2.28, 2.291, 2.27, 2.261, 2.279, 2.286, 2.27, 2.265, 2.279];
  const labels = ['-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1'];

  const [seconds, setSeconds] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isTimeShort, setIsTimeShort] = useState(false);

  const [oppChoice, setOppChoice] = useState(false);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(countdown);
        setIsTimeUp(true); // Set the boolean to true when time is up

        if (isRoundOver && !isGameOver) {
          // Wait for 10 seconds before restarting the countdown
          setTimeout(() => {
            setSeconds(10); // Reset the countdown timer
            setIsTimeUp(false); // Reset time up status
            setIsTimeShort(false); // Reset short time warning
            setIsRoundOver(false); // Mark the round as not over, starting a new round
          }, 10000); // Wait 10 seconds
        }
      }

      if (seconds < 5) {
        setIsTimeShort(true);
      }
    }, 1000);

    return () => clearInterval(countdown); // Clear interval on component unmount
  }, [seconds, isRoundOver, isGameOver]);

  return (
    <div className="flex justify-center items-center bg-base-200">
      <Navbar />

      <main className="container mx-auto px-4 mt-20">
        <section className="hero bg-base-100 rounded-lg shadow-md mb-8 flex flex-col">
          <div className="max-w-md">
            <div className="text-center bg-transparent p-4 rounded-md w-48 mx-auto">
              {!isTimeUp && <h1 className="text-2xl font-bold text-blue-500">{seconds}s</h1>}
              {isTimeUp && (
                <div className="justify-center bg transparent">
                  <p className="text-red-500 font-bold pb-2">Time's up!</p>
                  <Result />
                </div>
              )}
            </div>
            <Graphic data={data} labels={labels} isTimeUp={isTimeUp} />
            <Bottom isTimeUp={isTimeUp} isTimeShort={isTimeShort} oppChoice={oppChoice}/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
