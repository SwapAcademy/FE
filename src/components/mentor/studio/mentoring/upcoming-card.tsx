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
import { Edit } from 'lucide-react';

let placeholder = [
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
  },
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
  },
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
  },
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
  },
];

export default function UpcomingCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upcoming Mentoring</CardTitle>
      </CardHeader>
      <CardContent>
        <UpcomingTable />
      </CardContent>
    </Card>
  );
}

function UpcomingTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="p-6">No</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Mentee</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {placeholder.map((item, index) => (
            <TableRow>
              <TableCell className="p-6">{index + 1}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.mentee}</TableCell>
              <TableCell>{item.topic}</TableCell>
              <TableCell>
                <Button className="bg-blue-500 hover:bg-blue-500">
                  <Edit size={16} />
                  <span className="ml-2">Link Meet</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
