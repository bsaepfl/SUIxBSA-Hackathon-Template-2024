import React from "react";
import PlayersState from "./PlayersState";
import OpponentState from "./OpponentState";

// Define the prop types
interface BottomProps {
  isTimeUp: boolean;
  isTimeShort: boolean;
}

const Bottom: React.FC<BottomProps> = ({ isTimeUp, isTimeShort }) => {
  return (
    <div className="flex flex-row gap-4">
      <PlayersState isTimeUp={isTimeUp} isTimeShort={isTimeShort}/>
      <OpponentState isTimeUp={isTimeUp} />

    
    </div>
  );
};

export default Bottom;
