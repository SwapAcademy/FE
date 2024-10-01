import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Hourglass, Trash2 } from 'lucide-react';

let placeholder = [
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
  {
    name: 'Pemrograman Python',
    status: 'In Review',
    redemptions: 0,
    points: 0,
    date: '12 Sep 2024',
  },
];

export default function MyVideosTable() {
  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="px-6">Video</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Redemptions</TableHead>
          <TableHead>Points Earned</TableHead>
          <TableHead>Date Uploaded</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholder.map((data, index) => (
          <TableRow key={index}>
            <TableCell className="px-6">
              <div className="flex items-center space-x-3">
                <VideoThumbnail />
                <span>{data.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <Button className="bg-slate-100 hover:bg-slate-100">
                <Hourglass
                  className="text-orange-500"
                  size={16}
                />
                <span className="ml-2 text-gray-500">{data.status}</span>
              </Button>
            </TableCell>
            <TableCell>{data.redemptions}</TableCell>
            <TableCell>{data.points}</TableCell>
            <TableCell>{data.date}</TableCell>
            <TableCell className="space-x-2">
              <Button className="bg-blue-500 hover:bg-blue-500">
                <Edit size={16} />
                <span className="ml-1">Edit</span>
              </Button>
              <Button variant="destructive">
                <Trash2 size={16} />
                <span className="ml-1">Delete</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function VideoThumbnail() {
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
      <path
        d="M75 21.25C71.7861 21.25 68.6443 22.203 65.972 23.9886C63.2997 25.7742 61.2169 28.3121 59.987 31.2814C58.757 34.2507 58.4352 37.518 59.0622 40.6702C59.6893 43.8224 61.2369 46.7179 63.5095 48.9905C65.7821 51.2631 68.6776 52.8107 71.8298 53.4378C74.982 54.0648 78.2493 53.743 81.2186 52.513C84.1879 51.2831 86.7258 49.2003 88.5114 46.528C90.297 43.8557 91.25 40.7139 91.25 37.5C91.2455 33.1916 89.5319 29.061 86.4855 26.0145C83.439 22.9681 79.3084 21.2545 75 21.25ZM81.3359 38.5281L73.2109 44.1531C73.0234 44.2828 72.8039 44.3587 72.5763 44.3727C72.3486 44.3866 72.1215 44.3379 71.9196 44.2321C71.7176 44.1262 71.5484 43.967 71.4304 43.7719C71.3124 43.5768 71.25 43.3531 71.25 43.125V31.875C71.25 31.6469 71.3124 31.4232 71.4304 31.2281C71.5484 31.033 71.7176 30.8738 71.9196 30.7679C72.1215 30.6621 72.3486 30.6134 72.5763 30.6273C72.8039 30.6413 73.0234 30.7172 73.2109 30.8469L81.3359 36.4719C81.5022 36.5869 81.6382 36.7405 81.7321 36.9196C81.8259 37.0986 81.875 37.2978 81.875 37.5C81.875 37.7022 81.8259 37.9014 81.7321 38.0804C81.6382 38.2595 81.5022 38.4131 81.3359 38.5281Z"
        fill="white"
      />
    </svg>
  );
}
