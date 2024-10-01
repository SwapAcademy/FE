import SideNav from "@/components/layout/side-nav";
import { Bell, FileTerminalIcon, Filter, FilterXIcon, Search, Settings, User } from "lucide-react";
import React from "react";

const ProfileStudent = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideNav />

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

        {/* Content */}
        <div className="p-6 bg-white rounded-lg">
          <h1 className="flex gap-2">
            Find Your Courses{" "}
            <span>
              <Search />{" "}
            </span>
          </h1>

          {/* Dropdown Fields */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4 mt-4">
              <select className="border border-gray-300 rounded-md p-2">
                <option value="">Information Technology</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>

              <select className="border border-gray-300 rounded-md p-2">
                <option value="">Engineering</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              <select className="border border-gray-300 rounded-md p-2">
                <option value="">Art & Design</option>
                <option value="english">English</option>
                <option value="indonesian">Indonesian</option>
                <option value="spanish">Spanish</option>
              </select>

              <select className="border border-gray-300 rounded-md p-2">
                <option value="">Business Management</option>
                <option value="short">Short (1-3 weeks)</option>
                <option value="medium">Medium (1-3 months)</option>
                <option value="long">Long (3+ months)</option>
              </select>
            </div>
            <div>
              <h1>
                <Filter />
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileStudent;
