import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { History } from 'lucide-react';

export function TotalPointsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium flex items-center">
          <History
            className="mr-2 bg-sky-200 text-sky-500 rounded-full p-1"
            size={24}
          />
          <span>Total Points Earned</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-2xl font-semibold">120 pts</p>
        <p className="text-sm text-gray-500">Total points earned</p>
      </CardContent>
    </Card>
  );
}

export function TotalVideosCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium flex items-center">
          <History
            className="mr-2 bg-sky-200 text-sky-500 rounded-full p-1"
            size={24}
          />
          <span>Total Videos Uploaded</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-2xl font-semibold">25</p>
        <p className="text-sm text-gray-500">Video course uploaded</p>
      </CardContent>
    </Card>
  );
}

export function TotalSession() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium flex items-center">
          <History
            className="mr-2 bg-sky-200 text-sky-500 rounded-full p-1"
            size={24}
          />
          <span>Total Sessions</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-2xl font-semibold">50 times</p>
        <p className="text-sm text-gray-500">Total sessions</p>
      </CardContent>
    </Card>
  );
}
