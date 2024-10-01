import HistoryTabs from '@/components/dashboard/my-points/history-tabs';
import { PointsCollectedCard, PointsSpentCard } from '@/components/dashboard/my-points/points-card';
import TotalPointsCard from '@/components/dashboard/my-points/total-points-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl text-slate-950">My Points</h1>
      <div className="grid grid-cols-4 gap-7">
        <TotalPointsCard />
        <PointsCollectedCard />
        <PointsSpentCard />
        <HistoryTabs />
      </div>
    </div>
  );
}
