import { MedalLogo } from '@/components/dashboard/my-points/total-points-card';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronRight, Paintbrush } from 'lucide-react';
import Link from 'next/link';

let placeholder = [
  {
    title: 'Intro to UI/UX Design',
    date: '10 Aug 2024',
    points: -100,
  },
  {
    title: 'Intro to UI/UX Design',
    date: '10 Aug 2024',
    points: -100,
  },
  {
    title: 'Intro to UI/UX Design',
    date: '10 Aug 2024',
    points: -100,
  },
];

export default function MyPointsCard() {
  return (
    <Card className="col-span-2 row-span-2">
      <CardHeader className="items-center justify-center">
        <CardTitle className="text-xl font-medium">My Points</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <MedalLogo />
            <p className="text-gray-700 text-2xl font-medium">
              <span className="text-6xl font-bold">150</span>
              pts
            </p>
          </div>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 font-bold">
            Get More Points
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-12">
        <Link href="#" className="w-full flex justify-between items-center text-gray-500 ">
          <span className="text-sm">
            Redeemed Course
          </span>
          <ChevronRight size={16} />
        </Link>
        {placeholder.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 w-full"
          >
            <div className="bg-pink-200 rounded-full p-2 text-pink-500">
              <Paintbrush size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.date}</p>
            </div>
            <p className="flex-auto text-right text-red-500 font-semibold">
              {item.points} pts
            </p>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
