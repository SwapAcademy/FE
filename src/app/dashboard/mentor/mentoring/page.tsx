import HistoryCard from '@/components/mentor/mentoring/history-card';
import TimelineCard from '@/components/mentor/mentoring/timeline-card';
import UpcomingCard from '@/components/mentor/mentoring/upcoming-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">1-on-1 Mentoring</h1>
      <div className="grid grid-cols-4 gap-6">
        <TimelineCard />
        <UpcomingCard />
        <HistoryCard />
      </div>
    </div>
  );
}
