import Image from "next/image";
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
      <div className=" overflow-hidden">
        <Image width={200} height={200} src={img} alt="course" className="mx-auto" />
      </div>
      <div className="">
        <h1 className="text-sm font-semibold mb-2">{title}</h1>
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
