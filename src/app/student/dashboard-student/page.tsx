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

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <main className="flex-1 p-3 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          {/* Search bar */}
          <div className="relative w-full max-w-md">
            <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500" />
          </div>

          {/* Icon Notification and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              {/* Badge for notifications */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">3</span>
            </button>

            {/* Profile Icon */}
            <button>
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome back, Alex!</h1>

        {/* My Progress, My Points, and Continue Learning in one row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* My Progress */}
          <div>
            <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
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
                      {/* Example Rows */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2" style={{ width: "200px" }}>
                              <img src="/path/to/icon1.png" alt="Video 1" className="h-16 w-16 rounded" />
                              <p className="text-xs font-medium">Video 1</p>
                              <p className="text-xs text-gray-500">75%</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Introduction to Python</td>
                        <td className="px-6 py-4 whitespace-nowrap">75%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600">Completed</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2" style={{ width: "200px" }}>
                              <img src="/path/to/icon2.png" alt="Video 2" className="h-16 w-16 rounded" />
                              <p className="text-xs font-medium">Video 2</p>
                              <p className="text-xs text-gray-500">50%</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Web Design Fundamentals</td>
                        <td className="px-6 py-4 whitespace-nowrap">50%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-yellow-600">In Progress</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2" style={{ width: "200px" }}>
                              <img src="/path/to/icon3.png" alt="Video 3" className="h-16 w-16 rounded" />
                              <p className="text-xs font-medium">Video 3</p>
                              <p className="text-xs text-gray-500">30%</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Digital Marketing Basics</td>
                        <td className="px-6 py-4 whitespace-nowrap">30%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-600">Not Started</td>
                      </tr>
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
              {redeemedCourse.map((course) => {
                return <RedeemedCard key={course.id} {...course} />;
              })}
            </div>
          </div>
        </div>

        {/*Recommend For you */}
        <div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
            <h1>Recommend For You</h1>
            <div className="flex justify-between">
              {course.map((course) => {
                return <CardCourses key={course.id} {...course} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
