import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TopRatedCard() {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Top Rated Courses</CardTitle>
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
    rating: 4.9,
    reviews: 1200,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    rating: 4.9,
    reviews: 500,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    rating: 4.9,
    reviews: 0,
  },
  {
    title: 'Dasar-dasar Belajar Pemrograman Python',
    rating: 4.9,
    reviews: 0,
  },
];

function CoursesTable() {
  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="p-6">No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Reviews</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholder.map((course, index) => (
          <TableRow key={index}>
            <TableCell className="p-6">{index + 1}</TableCell>
            <TableCell>{course.title}</TableCell>
            <TableCell>⭐ {course.rating}</TableCell>
            <TableCell className="text-gray-500">{course.reviews}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
