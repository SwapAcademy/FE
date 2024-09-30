import React from "react";

interface CardCoursesProps {
  img: string;
  title: string;
  author: string;
  rating: string;
  points: string;
}

const CardCourses: React.FC<CardCoursesProps> = ({ title, author, img, points, rating }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow overflow-hidden mx-auto">
      <div className="h-48 overflow-hidden">
        <img src={img} alt={title} className="mx-auto mt-3 " />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p>{author}</p>
        <div className="flex justify-between">
          <div className="text-sm font-medium  justify-between">
            <span className="text-yellow-500">★</span>
            {rating}
          </div>
          <div>{points}</div>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;
