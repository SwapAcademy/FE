import React from "react";

interface BenefitsCardProps {
  description: string;
  icon: any;
  className: string;
}
const BenefitsCard: React.FC<BenefitsCardProps> = ({ icon, description, className }) => {
  return (
    <div className={`flex items-center px-9 py-20 gap-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 max-w-sm ${className} text-white`}>
      <img src={icon} className="w-20 " />
      <h1 className="text-3xl font-semibold">{description}</h1>
    </div>
  );
};

export default BenefitsCard;
