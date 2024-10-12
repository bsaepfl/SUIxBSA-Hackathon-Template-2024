import React, { useState } from "react";
import Sell from "./Sell";
import Buy from "./Buy";

const PlayersState = () => {
  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);

  const handleBuyClick = () => {
    if(!buyClicked && !sellClicked){
        setBuyClicked(true);}
  };

  const handleSellClick = () => {
    if(!sellClicked && !buyClicked){
        setSellClicked(true);}
  };

  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-white-200 border border-gray-300 rounded-lg shadow-lg p-4">
      <div className="flex space-x-4"> {/* Flex container for horizontal alignment */}
        <Buy onClick={handleBuyClick} />
        <Sell onClick={handleSellClick} />
      </div>
      <div className="mt-4">
        {buyClicked && <p>You clicked Up!</p>}
        {sellClicked && <p>You clicked Down!</p>}
      </div>
    </div>
  );
};

export default PlayersState;
