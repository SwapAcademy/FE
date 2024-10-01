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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, Hourglass } from 'lucide-react';

export default function HistoryTabs() {
  return (
    <Tabs
      className="col-span-4"
      defaultValue="mentee"
    >
      <TabsList>
        <TabsTrigger
          className="data-[state=active]:bg-white data-[state=active]:text-zinc-950 py-2"
          value="mentee"
        >
          As Mentee
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-white data-[state=active]:text-zinc-950 py-2"
          value="mentor"
        >
          As Mentor
        </TabsTrigger>
      </TabsList>
      <TabsContent value="mentee">
        <MenteeHistoryTable />
      </TabsContent>
      <TabsContent value="mentor">
        <MentorHistoryTable />
      </TabsContent>
    </Tabs>
  );
}

let menteePlaceholder = [
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    redemptions: 0,
    points: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    redemptions: 0,
    points: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    redemptions: 0,
    points: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    redemptions: 0,
    points: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    redemptions: 0,
    points: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    redemptions: 0,
    points: 0,
  },
];

let mentorPlaceholder = [
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    points: 0,
    status: 'Published',
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    points: 0,
    status: 'In Progress',
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    points: 0,
    status: 'In Progress',
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    points: 0,
    status: 'In Progress',
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    points: 0,
    status: 'In Progress',
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    date: '14 Jul 2024',
    points: 0,
    status: 'In Progress',
  },
];

function MentorHistoryTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Published Course History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="p-6">No</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date Published</TableHead>
                <TableHead>Points Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mentorPlaceholder.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="p-6">{index + 1}</TableCell>
                  <TableCell>
                    <CourseThumbnail />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.date}</TableCell>
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
                  <TableCell>
                    <ChevronRight className="text-gray-500" />
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

function MenteeHistoryTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Redeemed Course History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="p-6">No</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date Redeemed</TableHead>
                <TableHead>Redemptions</TableHead>
                <TableHead>Points Earned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menteePlaceholder.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="p-6">{index + 1}</TableCell>
                  <TableCell>
                    <CourseThumbnail />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.redemptions}</TableCell>
                  <TableCell>{item.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

function CourseThumbnail() {
  return (
    <svg
      width="150"
      height="75"
      viewBox="0 0 150 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="150"
        height="75"
        rx="6.66667"
        fill="#D9D9D9"
      />
    </svg>
  );
}
