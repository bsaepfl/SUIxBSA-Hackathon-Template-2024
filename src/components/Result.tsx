import React, { useState } from "react";


const Result = () => {
    
    const [p1W, setp1W] = useState(false);
    const [p2W, setp2W] = useState(false);
    const [eq, setEq] = useState(false);

    const handlep1Win = () => {
        if(!p1W && !p2W && !eq){
            setp1W(true);
        }
    };

    const handlep2Win = () => {
        if(!p2W && !p1W && !eq){
            setp2W(true);
        }
    };

    const handleEq = () => {
        if(!eq && !p1W && !p2W){
            setEq(true);
        }

    return (
      <div className="">
        {p1W && <p>Player 1 Wins!</p>}
        {p2W && <p>Player 2 Wins!</p>}
        {eq && <p>It's a tie!</p>}
      </div>
    );
  };
  
  export default Result;
  