import UploadVideoCard from '@/components/mentor/studio/upload-course/upload-video-card';
import VideoDetailsCard from '@/components/mentor/studio/upload-course/video-details-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">Upload Your Video Skill</h1>
      <UploadVideoCard />
      <VideoDetailsCard />
    </div>
  );
}
