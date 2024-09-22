import {
  LiveStreamCard,
  LiveStreamingCard,
  MentoringCard,
  PointsEarnedCard,
  UploadVideoCard,
  VideoPublishedCard,
} from '@/components/mentor/studio/cards';
import ScheduleCard from '@/components/mentor/studio/schedule-card';
import TopCoursesCard from '@/components/mentor/studio/top-courses-card';
import TopRatedCard from '@/components/mentor/studio/top-rated-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">Mentor Studio</h1>
      <div className="flex gap-6">
        <MentoringCard />
        <UploadVideoCard />
        <LiveStreamCard />
      </div>
      <div className="flex gap-6">
        <ScheduleCard />
        <div className="w-1/4 flex flex-col gap-2">
          <VideoPublishedCard />
          <PointsEarnedCard />
          <LiveStreamingCard />
        </div>
      </div>
      <div className="flex gap-6">
        <TopRatedCard />
        <TopCoursesCard />
      </div>
    </div>
  );
}
