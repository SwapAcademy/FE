import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Bell, Search } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <div className="bg-white w-full p-6 flex justify-between items-center">
      <SearchInput placeholder="Search..." />
      <div className="flex items-center gap-3">
        <Button
          className="rounded-full text-gray-500"
          variant="outline"
          size="icon"
        >
          <Bell size={16} />
        </Button>
        <Separator
          className="h-10 bg-gray-300"
          orientation="vertical"
        />
        <Avatar>
          <AvatarImage />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-96 font-medium">
        <Search
          className="absolute top-1/2 left-4 transform -translate-y-1/2  text-gray-500"
          size={16}
        />
        <Input
          className={cn('pl-10', className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';
