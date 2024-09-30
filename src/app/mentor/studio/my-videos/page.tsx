import MyVideosTable from '@/components/mentor/studio/my-videos/my-videos-table';
import { Card, CardHeader } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">My Videos</h1>
      <Card>
        <CardHeader>
          <div className="rounded-lg border">
            <MyVideosTable />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
