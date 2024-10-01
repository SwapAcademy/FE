"use client";

import SideNav from "@/components/layout/side-nav";
import { Bell, Search, User } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input"; // Ganti dengan path yang sesuai
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const dataBar = [
  { name: "Senin", value: 1 },
  { name: "Selasa", value: 2 },
  { name: "Rabu", value: 3 },
  { name: "Kamis", value: 2.5 },
  { name: "Jumat", value: 4 },
  { name: "Sabtu", value: 1.5 },
  { name: "Minggu", value: 5 },
];

const dataPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#99ccff", "#3399ff", "#cce6ff"];

const ExploreWorkshop = () => {
  const hourFormatter = (value: number) => `${value}h`;
  return (
    <div className="flex h-screen bg-gray-100">
      <SideNav />

      <main className="flex-1 p-3 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          {/* Search bar */}
          <div className="relative w-full max-w-md">
            <Input placeholder="Search..." className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Icon Notification and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">3</span>
            </button>

            {/* Profile Icon */}
            <button>
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white rounded-lg">
          <h1 className="text-xl font-semibold mb-4">Tracking Your Journey</h1>

          {/* Statistics Charts */}
          <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100">
            {/* Bar Chart Card */}
            <div className="w-full md:w-2/3 bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium mb-2">Statistics Belajar (Jam Progress)</h2>
              <BarChart width={700} height={400} data={dataBar} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis dataKey="name" />
                <YAxis tickFormatter={hourFormatter} />
                <Tooltip formatter={(value) => `${value}h`} />
                <Legend />
                <Bar dataKey="value" fill="#0EA5E9" barSize={60} />
              </BarChart>
            </div>

            {/* Donut Chart Card */}
            <div className="w-full md:w-1/3 bg-white border border-gray-300 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-medium mb-2">Statistics Workshop</h2>
              <PieChart width={400} height={300}>
                <Pie data={dataPie} cx={200} cy={150} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5} dataKey="value" label>
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

              {/* Custom Legend */}
              <div className="flex justify-center mt-4">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: "#99ccff" }}></span>
                    <span>In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: "#3399ff" }}></span>
                    <span>Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: "#cce6ff" }}></span>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 mt-6">Current Courses</h1>
            <div>
              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">My Progress</h2>
                <div className="flex gap-4">
                  <div className="max-w-[99%] border-4 border-gray-300 rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mentor</th>
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
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">Introduction to Python</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {/* Progress Bar */}
                              <div className="relative w-full bg-gray-200 h-4 rounded">
                                <div className="absolute top-0 left-0 h-full bg-green-500 rounded" style={{ width: "75%" }}></div>
                              </div>
                              <p className="text-xs text-gray-500">75% (1h)</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">2h</td>
                            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                            <td className="px-6 py-4 whitespace-nowrap text-green-600">
                              <div className="flex items-center gap-2">
                                <span>Completed</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2" style={{ width: "200px" }}>
                                  <img src="/path/to/icon2.png" alt="Video 2" className="h-16 w-16 rounded" />
                                  <p className="text-xs font-medium">Video 2</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">Web Design Fundamentals</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="relative w-full bg-gray-200 h-4 rounded">
                                <div className="absolute top-0 left-0 h-full bg-blue-500 rounded" style={{ width: "45%" }}></div>
                              </div>
                              <p className="text-xs text-gray-500">45% (0.9h)</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">1h</td>
                            <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                            <td className="px-6 py-4 whitespace-nowrap text-yellow-600">
                              <div className="flex items-center gap-2">
                                <span>In Progress</span>
                              </div>
                            </td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreWorkshop;
