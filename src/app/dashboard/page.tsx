"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bell, User, ArrowRight } from "lucide-react";
import SideNav from "@/components/layout/student/side-nav";
import { course, myProgres } from "@/data";
import CardProgress from "@/components/ui/card-progress";
import RedeemedCard from "@/components/ui/redeemed-card";
import { redeemedCourse } from "@/data";
import CardCourses from "@/components/ui/card-courses";
import { useEffect, useState } from "react";
import { getCoursesByUserId } from "../api/course";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = session?.user?.id || 1;
        const data = await getCoursesByUserId(userId);
        console.log("Fetched data:", data); //

        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    if (session) {
      localStorage.setItem("token", session.user.token);
      console.log("User token:", session.user.token);
      fetchCourses();
    }
  }, [session]);

  console.log(courses);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-3 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome back, {session?.user?.name || "User"}!</h1>

        {/* My Progress, My Points, and Continue Learning in one row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* My Progress */}
          <div className="flex-1">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">My Progress</h2>
              <div className="flex gap-4">
                {myProgres.map((progress) => (
                  <CardProgress key={progress.id} {...progress} />
                ))}
              </div>
            </div>

            {/* Continue Learning */}
            <div className="mt-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Continue Learning</h2>
                <h2 className="flex text-sky-500">
                  See All <ArrowRight />
                </h2>
              </div>
              <div className="max-w-[99%] border-4 border-gray-300 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            No courses available.
                          </td>
                        </tr>
                      ) : (
                        courses.map((course) => (
                          <tr key={course.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2" style={{ width: "200px" }}>
                                  <img src={course.videoThumbnail} alt={course.videoTitle} className="h-16 w-16 rounded" />
                                  <p className="text-xs font-medium">{course.videoTitle}</p>
                                  <p className="text-xs text-gray-500">{course.progress}%</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{course.progress}%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-green-600">{course.status}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* My Points */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">My Points</h2>
              <div className="flex justify-center items-center">
                <Image src="/Medal.svg" alt="Medal" width={90} height={90} className="mb-2" />
                <h1 className="text-4xl font-semibold text-black">150 Points</h1>
              </div>
              <Button className="mt-4 bg-sky-500">Get More Points</Button>
            </div>
            <div className="flex justify-between mt-10">
              <h1>Redeemed Course</h1>
              <ArrowRight />
            </div>
            <div>
              {redeemedCourse.map((course) => (
                <RedeemedCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </div>

        {/* Recommend For You */}
        <div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
            <h1>Recommend For You</h1>
            <div className="flex justify-between">
              {course.map((course) => (
                <CardCourses key={course.id} {...course} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
