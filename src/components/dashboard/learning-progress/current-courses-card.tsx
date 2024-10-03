import { VideoThumbnail } from '@/components/mentor/my-videos/my-videos-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronRight, Hourglass } from 'lucide-react';

let placeholder = [
  {
    title: 'Pemrograman Python',
    mentor: 'John Doe',
    duration: '54 minutes',
    minutesLeft: 30,
    progress: 50,
    status: 'In Progress',
  },
  {
    title: 'Pemrograman Python',
    mentor: 'John Doe',
    duration: '54 minutes',
    minutesLeft: 30,
    progress: 50,
    status: 'In Progress',
  },
  {
    title: 'Pemrograman Python',
    mentor: 'John Doe',
    duration: '54 minutes',
    minutesLeft: 30,
    progress: 50,
    status: 'In Progress',
  },
];

export default function CurrentCoursesCard() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="font-semibold text-base">
          Current Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <CoursesTable />
        </div>
      </CardContent>
    </Card>
  );
}

function CoursesTable() {
  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-6">Video</TableHead>
          <TableHead>Course Name</TableHead>
          <TableHead>Mentor</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholder.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="px-6">
              <VideoThumbnail />
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.mentor}</TableCell>
            <TableCell>{item.duration}</TableCell>
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
            <TableCell>
              <ChevronRight size={16} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
