import React, { useState } from "react";
// Define the props type
interface OpponentStateProps {
  isTimeUp: boolean;
  oppChoice: boolean;
}

const OpponentState: React.FC<OpponentStateProps> = ({ isTimeUp, oppChoice }) => {
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
    <div className={`flex flex-col items-center justify-center w-64 h-20 border border-gray-300 rounded-lg shadow-lg p-8 ${oppChoice ? 'bg-green-200' : 'bg-redd-200'}`}>
      <div className="flex space-x-4 p-4">
       {!isTimeUp &&  <p>Your opponent is thinking...</p>}
       {oppChoice && isTimeUp && <p>Your opponent chose Up!</p>}
        {!oppChoice && isTimeUp && <p>Your opponent chose Down!</p>}
      </div>
    </div>
  );
};

export default OpponentState;
