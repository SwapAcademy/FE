"use client";
import { useState } from "react";
import CardCourses from "@/components/ui/card-courses";

interface Course {
  id: number;
  img: string;
  title: string;
  author: string;
  rating: string;
  points: string;
}

interface CarouselProps {
  course: Course[];
}

const Carousel: React.FC<CarouselProps> = ({ course }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coursesPerSlide = 4;

  const totalSlides = Math.ceil(course.length / coursesPerSlide);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Mengambil kursus yang ditampilkan berdasarkan currentIndex
  const displayedCourses = course.slice(currentIndex * coursesPerSlide, currentIndex * coursesPerSlide + coursesPerSlide);

  return (
    <div className="carousel-container relative w-full max-w-6xl mx-auto">
      <div className="carousel-wrapper overflow-hidden relative">
        <div className="carousel-content flex transition-transform duration-500">
          {displayedCourses.map((courseItem) => (
            <div key={courseItem.id} className="w-1/4 p-2">
              <CardCourses title={courseItem.title} author={courseItem.author} img={courseItem.img} points={courseItem.points} rating={courseItem.rating} />
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Navigasi */}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">
        Next
      </button>
    </div>
  );
};

export default Carousel;
