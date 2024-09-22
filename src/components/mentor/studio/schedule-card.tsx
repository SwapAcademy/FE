'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SquarePen } from 'lucide-react';
import React from 'react';

export default function ScheduleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Mentoring Schedule</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-5 items-start">
        <MentorCalendar />
        <div className="w-full rounded-lg border">
          <ScheduleTable />
        </div>
      </CardContent>
    </Card>
  );
}

function MentorCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  );
}

let placeholder = [
  {
    date: '14 Jul 2024',
    time: '19:00 PM',
    mentee: 'John Doe',
  },
  {
    date: '14 Jul 2024',
    time: '19:00 PM',
    mentee: 'John Doe',
  },
  {
    date: '14 Jul 2024',
    time: '19:00 PM',
    mentee: 'John Doe',
  },
  {
    date: '14 Jul 2024',
    time: '19:00 PM',
    mentee: 'John Doe',
  },
];

function ScheduleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Mentee</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholder.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.mentee}</TableCell>
            <TableCell>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white font-medium">
                <SquarePen size={12} />
                <span className="ml-2">Link Meet</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
