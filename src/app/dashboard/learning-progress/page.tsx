import CurrentCoursesCard from '@/components/dashboard/learning-progress/current-courses-card';
import { ProgressCard } from '@/components/dashboard/learning-progress/progress-card';
import { ProgressPie } from '@/components/dashboard/learning-progress/progress-pie';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl text-slate-950">Track Your Learning Journey</h1>
      <div className="grid grid-cols-3 gap-6">
        <ProgressCard />
        <ProgressPie />
        <CurrentCoursesCard />
      </div>
    </div>
  );
}
