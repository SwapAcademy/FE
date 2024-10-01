import Image from "next/image";
import React from "react";

interface RedeemedProps {
  icon: string;
  course: string;
  date: string;
  points: string;
}

const RedeemedCard: React.FC<RedeemedProps> = ({ icon, course, date, points }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-sm rounded-md p-2">
      {/* Icon Section */}
      <div className="flex-shrink-0">
        <Image src={icon} alt="Redeemed" width={50} height={50} className="rounded" />
      </div>

      {/* Course and Date Section */}
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-gray-700">{course}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>

      {/* Points Section */}
      <div className="text-right">
        <p className="text-sm font-semibold text-red-500">{points}</p>
      </div>
    </div>
  );
};

export default RedeemedCard;
