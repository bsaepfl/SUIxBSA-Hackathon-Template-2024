import React, { useState } from "react";
import Sell from "./Sell"; // Importing the Sell component
import Buy from "./Buy";   // Importing the Buy component

const PlayersState = () => {
  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);

  // Handler for the Buy button click
  const handleBuyClick = () => {
    if (!buyClicked && !sellClicked) {
      setBuyClicked(true);   // Set Buy clicked to true
      setSellClicked(false);  // Ensure Sell is set to false
    }
  };

  // Handler for the Sell button click
  const handleSellClick = () => {
    if (!sellClicked && !buyClicked) {
      setSellClicked(true);   // Set Sell clicked to true
      setBuyClicked(false);    // Ensure Buy is set to false
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-64 h-64 border border-gray-300 rounded-lg shadow-lg p-4 ${buyClicked ? 'bg-green-200' : sellClicked ? 'bg-red-200' : 'bg-white'}`}>
      <div className="flex space-x-4"> {/* Flex container for horizontal alignment */}
        <Buy onClick={handleBuyClick} />
        <Sell onClick={handleSellClick} />
      </div>
      <div className="mt-4">
        {buyClicked && <p>You clicked Up!</p>}   {/* Message for Buy click */}
        {sellClicked && <p>You clicked Down!</p>} {/* Message for Sell click */}
      </div>
    </div>
  );
};

export default PlayersState;

