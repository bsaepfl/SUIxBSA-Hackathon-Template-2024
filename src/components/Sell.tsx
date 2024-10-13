import React from 'react';

type SellProps = {
  onClick: () => void; // Specify the type for onClick
};

const Sell: React.FC<SellProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-s bg-red-300 hover:bg-red-600 text-white p-4 rounded-lg" // Red color classes
    >
      Down
    </button>
  );
};

export default Sell;

