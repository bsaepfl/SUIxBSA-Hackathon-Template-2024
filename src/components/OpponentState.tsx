import React, { useState } from "react";
import Sell from "./Sell";
import Buy from "./Buy";

// Define the props type
interface OpponentStateProps {
  isTimeUp: boolean;
}

const OpponentState: React.FC<OpponentStateProps> = ({ isTimeUp }) => {
  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);

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
      <div className="flex space-x-4 p-4">
        <Buy onClick={handleBuyClick}  />
        <Sell onClick={handleSellClick}  />
      </div>
      <div className="mt-4">
        {buyClicked && <p>You clicked Up!</p>}
        {sellClicked && <p>You clicked Down!</p>}
      </div>
    </div>
  );
};

export default OpponentState;
