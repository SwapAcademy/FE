import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Coins, Star } from 'lucide-react';

let placeholder = [
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    views: 2100,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    views: 2100,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    views: 2100,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    views: 2100,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    views: 2100,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    views: 2100,
  },
];

export default function CoursesCards() {
  return (
    <>
      {placeholder.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <BookmarkThumbnail />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <p className="font-bold">{item.title}</p>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                  <Avatar className="w-4 h-4">
                    <AvatarFallback className="bg-gray-300"></AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{item.user}</p>
                </div>
                <p>•</p>
                <p className="text-sm font-medium">2100 views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

function BookmarkThumbnail() {
  return <div className="w-full h-40 bg-gray-200 rounded-md"></div>;
}
