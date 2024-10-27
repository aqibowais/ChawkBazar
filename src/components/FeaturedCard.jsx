import React from 'react';

const FeaturedCard = ({ category }) => {
  return (
    <div className="min-w-[150px] border rounded-lg p-4 shadow-md flex items-center justify-center">
      <h1 className="text-center">{category}</h1>
    </div>
  );
};

export default FeaturedCard;
