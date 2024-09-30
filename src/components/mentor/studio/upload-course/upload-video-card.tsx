import { Card, CardHeader } from '@/components/ui/card';
import { Upload } from 'lucide-react';

export default function UploadVideoCard() {
  return (
    <Card className="h-[450px]">
      <CardHeader className="h-full">
        <div className="h-full border p-8 rounded-lg flex flex-col gap-9 items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-semibold text-xl text-slate-900">
              Upload File
            </h2>
            <p className="text-slate-500">
              Drag and drop file here or click to upload.
            </p>
          </div>
          <div className="flex h-[128px] w-[128px] items-center justify-center rounded-lg border border-dashed border-gray-500">
            <Upload
              className="text-gray-500"
              size={24}
            />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
