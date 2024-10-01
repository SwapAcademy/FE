import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TopCoursesCard() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Courses Redeemed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <CoursesTable />
        </div>
      </CardContent>
    </Card>
  );
}

let placeholder = [
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    redemptions: 2100,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    redemptions: 670,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    redemptions: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    redemptions: 0,
  },
];

function CoursesTable() {
  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="p-6">No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Redemptions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholder.map((course, index) => (
          <TableRow key={index}>
            <TableCell className="p-6">{index + 1}</TableCell>
            <TableCell>{course.title}</TableCell>
            <TableCell className="text-gray-500">
              {course.redemptions}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
