import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Graphic from '../components/Graphic';
import Bottom from '../components/Bottom';
import Result from '../components/Result';

const Home = () => {

  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];


  const [seconds, setSeconds] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isTimeShort, setIsTimeShort] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(countdown);
        setIsTimeUp(true); // Set the boolean to true when time is up
      }
      if (seconds < 5) {
        setIsTimeShort(true);
      }
    }, 1000);

    return () => clearInterval(countdown); // Clear interval on component unmount
  }, [seconds]);

  return (
    <div className="flex justify-center items-center bg-base-200  " >
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
            <Graphic data={data} labels={labels} />
            <Bottom isTimeUp={isTimeUp} isTimeShort={isTimeShort} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
