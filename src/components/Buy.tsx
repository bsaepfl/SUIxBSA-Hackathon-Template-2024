import React from 'react';

type BuyProps = {
  onClick: () => void; // Specify the type for onClick
};

const Buy: React.FC<BuyProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary bg-lime-200 hover:bg-green-600 text-white p-4 rounded-lg" // Green color classes
    >
      Up
    </button>
  );
};

export default Buy;

