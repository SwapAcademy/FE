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
import ContinueLearningCard from "@/components/dashboard/continue-learning-card";
import DashboardCards from "@/components/dashboard/dashboard-cards";
import MyPointsCard from "@/components/dashboard/my-points-card";
import RecommendedCards from "@/components/dashboard/recommended-card";

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
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl text-slate-950">Welcome, {session?.user?.name || "User"}! 👋</h1>

      {/* My Progress, My Points, and Continue Learning in one row */}
      <div className="grid grid-cols-5 gap-4">
        <DashboardCards /> {/* Your modular component for Progress */}
        <MyPointsCard /> {/* Your modular component for Points */}
        <ContinueLearningCard /> {/* Your modular component for Continue Learning */}
        <RecommendedCards /> {/* Your modular component for Recommendations */}
      </div>

      {/* My Courses (with Table) */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Continue Learning</h2>
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
  );
}
