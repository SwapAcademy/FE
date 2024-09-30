import { MentoringChart } from '@/components/mentor/studio/analytics/mentoring-chart';
import { PointsChart } from '@/components/mentor/studio/analytics/points-chart';
import {
  TotalPointsCard,
  TotalSession,
  TotalVideosCard,
} from '@/components/mentor/studio/analytics/total-cards';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">Analytics</h1>
      <div className="grid grid-cols-3 gap-6">
        <TotalPointsCard />
        <TotalVideosCard />
        <TotalSession />
        <PointsChart />
        <MentoringChart />
      </div>
    </div>
  );
}
