import React from 'react';

type BuyProps = {
  cote: number;
};

const Buy: React.FC<BuyProps> = ({ cote }) => {
  return (
    <button className="btn btn-primary bg-blue-500 hover:bg-blue-600">
      La cote est a {cote}
    </button>
  );
};

export default Buy;
