import React from "react";
import PlayersState from "./PlayersState";
import Result from "./Result";
const Bottom = () => {
    
  
    return (
      <div className="flex flex-row gap-4">
        <PlayersState/>
        <PlayersState/> 
      </div>
    );
  };
  
  export default Bottom;
  