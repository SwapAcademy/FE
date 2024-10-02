import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bookmark, CalendarCheck, History } from 'lucide-react';

export default function DashboardCards() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-sm flex gap-2">
            <div className="bg-sky-200 rounded-full p-1 text-sky-500">
              <History size={10} />
            </div>
            <span>Time Watched</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">50 hours</h1>
          <p className="text-gray-500 text-sm">Video course bookmarked</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-sm flex gap-2">
            <div className="bg-sky-200 rounded-full p-1 text-sky-500">
              <CalendarCheck size={10} />
            </div>
            <span>Upcoming Mentoring</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">2 session</h1>
          <p className="text-gray-500 text-sm">Mentoring session</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-sm flex gap-2">
            <div className="bg-sky-200 rounded-full p-1 text-sky-500">
              <Bookmark size={10} />
            </div>
            <span>Videos Completed</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">12</h1>
          <p className="text-gray-500 text-sm">Videos Completed</p>
        </CardContent>
      </Card>
    </>
  );
}
