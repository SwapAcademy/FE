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
import { Hourglass } from 'lucide-react';

let placeholder = [
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
    points: '100 pts',
    status: 'Completed',
  },
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
    points: '100 pts',
    status: 'Completed',
  },
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
    points: '100 pts',
    status: 'Completed',
  },
  {
    date: '14 Jul 2024',
    time: '19:00',
    mentee: 'John Doe',
    topic: 'Python Basics',
    points: '100 pts',
    status: 'Completed',
  },
];

export default function HistoryCard() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Mentoring History</CardTitle>
      </CardHeader>
      <CardContent>
        <HistoryTable />
      </CardContent>
    </Card>
  );
}

function HistoryTable() {
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
            <TableHead>Points Earned</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {placeholder.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="p-6">{index + 1}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.mentee}</TableCell>
              <TableCell>{item.topic}</TableCell>
              <TableCell>{item.points}</TableCell>
              <TableCell>
                <Button className="bg-slate-100 hover:bg-slate-100">
                  <Hourglass
                    className="text-orange-500"
                    size={16}
                  />
                  <span className="ml-1 text-gray-500">{item.status}</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
