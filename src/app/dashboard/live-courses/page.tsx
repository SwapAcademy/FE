import DashboardNav from '@/components/dashboard-nav';
import CoursesCards from '@/components/dashboard/live-courses/courses-cards';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl text-slate-950">Live Mentoring</h1>
      <DashboardNav />
      <div className="grid grid-cols-3 gap-6">
        <CoursesCards />
      </div>
    </div>
  );
}
