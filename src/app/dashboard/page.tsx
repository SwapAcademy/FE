import ContinueLearningCard from '@/components/dashboard/continue-learning-card';
import DashboardCards from '@/components/dashboard/dashboard-cards';
import MyPointsCard from '@/components/dashboard/my-points-card';
import RecommendedCards from '@/components/dashboard/recommended-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl text-slate-950">
        Welcome, Fiona! 👋
      </h1>
      <div className="grid grid-cols-5 gap-4">
        <DashboardCards />
        <MyPointsCard />
        <ContinueLearningCard />
        <RecommendedCards />
      </div>
    </div>
  );
}
