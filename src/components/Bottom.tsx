import React from "react";
import PlayersState from "./PlayersState";
import Result from "./Result";
const Bottom = () => {
    
  
    return (
      <div className="flex flex-row">
        <PlayersState/>
        <Result/>
        <PlayersState/> 
      </div>
    );
  };
  
  export default Bottom;
  