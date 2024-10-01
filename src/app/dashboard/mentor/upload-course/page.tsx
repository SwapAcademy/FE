import UploadVideoCard from '@/components/mentor/upload-course/upload-video-card';
import VideoDetailsCard from '@/components/mentor/upload-course/video-details-card';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl">Upload Your Video Skill</h1>
      <UploadVideoCard />
      <VideoDetailsCard />
    </div>
  );
}
