import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronRight, Hourglass } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '../ui/progress';

let placeholder = [
  {
    title: 'Pemrograman Python',
    minutesLeft: 30,
    progress: 50,
    status: 'In Progress',
  },
  {
    title: 'Pemrograman Python',
    minutesLeft: 30,
    progress: 50,
    status: 'In Progress',
  },
  {
    title: 'Pemrograman Python',
    minutesLeft: 30,
    progress: 50,
    status: 'In Progress',
  },
];

export default function ContinueLearningCard() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-semibold">Continue Learning</CardTitle>
        <Link className="flex gap-2 items-center text-sky-500" href="/#">
          <span>View All</span>
          <ChevronRight size={16} />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="px-6 w-[100px]">Video</TableHead>
                <TableHead className="w-[150px]">Course</TableHead>
                <TableHead className="w-[200px]">Progress</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholder.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="px-6">
                    <VideoThumbnail />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="space-y-2">
                    <p className="text-gray-400 text-sm font-medium">
                      {item.minutesLeft} mins left
                    </p>
                    <Progress
                      className="[&>div]:bg-sky-500 w-[150px]"
                      value={item.progress}
                    />
                  </TableCell>
                  <TableCell>
                    <Button className="bg-slate-100 hover:bg-slate-100">
                      <Hourglass className="text-orange-500" size={16} />
                      <span className="ml-1 text-gray-500">{item.status}</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

function VideoThumbnail() {
  return (
    <svg
      width="91"
      height="45"
      viewBox="0 0 91 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="90" height="45" rx="4" fill="#D9D9D9" />
      <path
        d="M45.5 12.75C43.5716 12.75 41.6866 13.3218 40.0832 14.3932C38.4798 15.4645 37.2301 16.9873 36.4922 18.7688C35.7542 20.5504 35.5611 22.5108 35.9373 24.4021C36.3136 26.2934 37.2422 28.0307 38.6057 29.3943C39.9693 30.7579 41.7066 31.6865 43.5979 32.0627C45.4892 32.4389 47.4496 32.2458 49.2312 31.5078C51.0127 30.7699 52.5355 29.5202 53.6068 27.9168C54.6782 26.3134 55.25 24.4284 55.25 22.5C55.2473 19.915 54.2192 17.4366 52.3913 15.6087C50.5634 13.7808 48.085 12.7527 45.5 12.75ZM49.3016 23.1169L44.4266 26.4919C44.314 26.5697 44.1823 26.6152 44.0458 26.6236C43.9092 26.6319 43.7729 26.6028 43.6517 26.5392C43.5306 26.4757 43.4291 26.3802 43.3583 26.2631C43.2874 26.1461 43.25 26.0118 43.25 25.875V19.125C43.25 18.9882 43.2874 18.8539 43.3583 18.7369C43.4291 18.6198 43.5306 18.5243 43.6517 18.4608C43.7729 18.3972 43.9092 18.3681 44.0458 18.3764C44.1823 18.3848 44.314 18.4303 44.4266 18.5081L49.3016 21.8831C49.4013 21.9521 49.4829 22.0443 49.5392 22.1517C49.5956 22.2592 49.625 22.3787 49.625 22.5C49.625 22.6213 49.5956 22.7408 49.5392 22.8483C49.4829 22.9557 49.4013 23.0479 49.3016 23.1169Z"
        fill="white"
      />
    </svg>
  );
}
