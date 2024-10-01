import { MentoringChart } from '@/components/mentor/analytics/mentoring-chart';
import { PointsChart } from '@/components/mentor/analytics/points-chart';
import {
  TotalPointsCard,
  TotalSession,
  TotalVideosCard,
} from '@/components/mentor/analytics/total-cards';
import TopCoursesCard from '@/components/mentor/top-courses-card';
import TopRatedCard from '@/components/mentor/top-rated-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">Analytics</h1>
      <div className="grid grid-cols-6 gap-6">
        <TotalPointsCard />
        <TotalVideosCard />
        <TotalSession />
        <PointsChart />
        <MentoringChart />
        <TopRatedCard />
        <TopCoursesCard />
      </div>
    </div>
  );
}
