import {
  LiveStreamCard,
  MentoringCard,
  UploadVideoCard,
} from '@/components/mentor/studio/cards';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-lg">Mentor Studio</h1>
      <div className="flex gap-6">
        <MentoringCard />
        <UploadVideoCard />
        <LiveStreamCard />
      </div>
    </div>
  );
}
