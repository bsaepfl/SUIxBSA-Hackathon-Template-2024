import React, { useState } from "react";
import Sell from "./Sell";
import Buy from "./Buy";
// Define the props type
interface PlayersStateProps {
  isTimeUp: boolean;
  isTimeShort: boolean;
}

const PlayersState: React.FC<PlayersStateProps> = ({ isTimeUp, isTimeShort }) => {
  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);

  const blinking = isTimeShort && !(buyClicked || sellClicked);

  const handleBuyClick = () => {
    if (!isTimeUp && !buyClicked && !sellClicked) {
      setBuyClicked(true);
    }
  };

  const handleSellClick = () => {
    if (!isTimeUp && !sellClicked && !buyClicked) {
      setSellClicked(true);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-64 h-32 border border-gray-300 rounded-lg shadow-lg p-8 ${buyClicked ? 'bg-green-200' : sellClicked ? 'bg-red-200' : 'bg-transparent'}`}>
      <div className="flex space-x-4 p-4"> {/* Flex container for horizontal alignment */}
        <Buy onClick={handleBuyClick}/>
        <Sell onClick={handleSellClick} />
      </div>
      <div className="mt-4 flex flex-row">
        {buyClicked && <p>You clicked Up!</p>}
        {sellClicked && <p>You clicked Down!</p>}
        {blinking && <p className="animate-pulse text-red-500">Hurry up!</p>}
      </div>
    </div>
  );
};

export default PlayersState;
