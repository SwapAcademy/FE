import Image from "next/image";

interface CardProgressProps {
  icon: string;
  title: string;
  progress: string;
  description: string;
}

const CardProgress: React.FC<CardProgressProps> = ({ icon, title, progress, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-[220px] h-[130px]">
      <div className="flex items-center mb-4">
        <Image src={icon} alt={title} width={20} height={20} className="mb-2" />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="text-xl font-bold text-green-600">{progress}</div>
      <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
    </div>
  );
};

export default CardProgress;
