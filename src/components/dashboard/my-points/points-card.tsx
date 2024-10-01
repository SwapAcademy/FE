import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export function PointsCollectedCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium flex items-center">
          <Bookmark
            className="mr-2 bg-sky-200 text-sky-500 rounded-full p-1"
            size={24}
          />
          <span>Points Collected</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-3xl font-semibold">120</p>
        <p className="text-gray-500">Collected this month</p>
      </CardContent>
    </Card>
  );
}

export function PointsSpentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium flex items-center">
          <Bookmark
            className="mr-2 bg-sky-200 text-sky-500 rounded-full p-1"
            size={24}
          />
          <span>Points Spent</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-3xl font-semibold">120</p>
        <p className="text-gray-500">Spent this month</p>
      </CardContent>
    </Card>
  );
}
