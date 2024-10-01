'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit } from 'lucide-react';
import { useState } from 'react';

export default function TimelineCard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Timeline</CardTitle>
        <Button className="bg-blue-500 hover:bg-blue-500">
          <Edit size={16} />
          <span className="ml-1">Edit</span>
        </Button>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </CardContent>
    </Card>
  );
}
