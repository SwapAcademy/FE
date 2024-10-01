import {
  LiveStreamCard,
  LiveStreamingCard,
  MentoringCard,
  PointsEarnedCard,
  UploadVideoCard,
  VideoPublishedCard,
} from '@/components/mentor/cards';
import ScheduleCard from '@/components/mentor/schedule-card';
import TopCoursesCard from '@/components/mentor/top-courses-card';
import TopRatedCard from '@/components/mentor/top-rated-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">Mentor Studio</h1>
      <div className="grid grid-cols-6 gap-6">
        <MentoringCard />
        <UploadVideoCard />
        <LiveStreamCard />
        <div className="grid grid-cols-subgrid col-span-6">
          <ScheduleCard />
          <div className="col-span-2 space-y-3">
            <VideoPublishedCard />
            <PointsEarnedCard />
            <LiveStreamingCard />
          </div>
        </div>
        <TopRatedCard />
        <TopCoursesCard />
      </div>
    </div>
  );
}
