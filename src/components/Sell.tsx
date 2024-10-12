
import React from 'react';

type SellProps = {
  contre: number;
};

const Sell: React.FC<SellProps> = ({ contre }) => {
  return (
    <button className="btn btn-primary bg-blue-500 hover:bg-blue-600">
      {contre}
    </button>
  );
};

export default Sell;