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
import { Progress } from '@/components/ui/progress';
import { VideoThumbnail } from '@/components/mentor/my-videos/my-videos-table';

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
