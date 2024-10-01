import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Coins, Star } from 'lucide-react';

let placeholder = [
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    rating: 4.9,
    ratingCount: 100,
    points: 120,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    rating: 4.9,
    ratingCount: 100,
    points: 120,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    rating: 4.9,
    ratingCount: 100,
    points: 120,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    rating: 4.9,
    ratingCount: 100,
    points: 120,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    rating: 4.9,
    ratingCount: 100,
    points: 120,
  },
  {
    title: 'Pengembangan Aplikasi Mobile untuk Pemula',
    user: 'John Doe',
    rating: 4.9,
    ratingCount: 100,
    points: 120,
  },
];

export default function BookmarkCards() {
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
              <div className="flex items-center gap-1">
                <Avatar className="w-4 h-4">
                  <AvatarFallback className="bg-gray-300"></AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-gray-500">{item.user}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
                  <Star
                    className="text-yellow-500"
                    fill="#eab308"
                  />
                  <p>
                    {item.rating} ({item.ratingCount}+)
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
                  <Coins className="text-sky-500" />
                  <p>{item.points} pts</p>
                </div>
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
