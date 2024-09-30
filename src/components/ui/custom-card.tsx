import React from 'react';

interface CardProps {
  img: string | null;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ img, title, description }) => {
  return (
    <div className="flex">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-[300px]">
        {img && (
          <img
            src={img}
            alt={title}
            className="mb-4 rounded-lg"
          />
        )}
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb04">{description}</p>
      </div>
    </div>
  );
};

export default Card;
