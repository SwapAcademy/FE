import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Bell, Search } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEditProfile = () => {
    console.log("Navigating to Edit Profile...");
    // Tambahkan logika untuk navigasi atau modal edit profile
  };

  const handleLogOut = async () => {
    console.log("LogOut");
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    await signOut({ callbackUrl: "/signin" });
  };

  return (
    <header className="bg-white w-full p-6 flex justify-between items-center">
      <SearchInput placeholder="Search..." />
      <div className="relative flex items-center gap-3">
        <Button className="rounded-full text-gray-500" variant="outline" size="icon">
          <Bell size={16} />
        </Button>
        <Separator className="h-10 bg-gray-300" orientation="vertical" />

        {/* Avatar with Dropdown */}
        <div className="relative">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul>
                <li onClick={handleEditProfile} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Edit Profile
                </li>
                <li onClick={handleLogOut} className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-96 font-medium">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={16} />
      <Input className={cn("pl-10", className)} ref={ref} {...props} />
    </div>
  );
});
SearchInput.displayName = "SearchInput";
