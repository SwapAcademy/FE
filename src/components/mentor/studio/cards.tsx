import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function MentoringCard() {
  return (
    <Card className="w-full">
      <CardContent className="flex p-6">
        <div className="space-y-6">
          <h1 className="font-bold text-3xl">Start 1-on-1 Mentoring</h1>
          <Button
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold"
            size="lg"
          >
            Start Now
          </Button>
        </div>
        <MentoringLogo />
      </CardContent>
    </Card>
  );
}
export function UploadVideoCard() {
  return (
    <Card className="w-full">
      <CardContent className="flex p-6">
        <div className="space-y-6">
          <h1 className="font-bold text-3xl">Upload Your Video Skill</h1>
          <Button
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold"
            size="lg"
          >
            Start Now
          </Button>
        </div>
        <UploadVideoLogo />
      </CardContent>
    </Card>
  );
}

export function LiveStreamCard() {
  return (
    <Card className="w-full">
      <CardContent className="flex p-6">
        <div className="space-y-6">
          <h1 className="font-bold text-3xl">Start Live Stream</h1>
          <Button
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold"
            size="lg"
          >
            Start Now
          </Button>
        </div>
        <LiveStreamLogo />
      </CardContent>
    </Card>
  );
}

function MentoringLogo() {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="115"
        height="115"
        fill="url(#pattern0_99_7045)"
      />
      <defs>
        <pattern
          id="pattern0_99_7045"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_99_7045"
            transform="scale(0.0078125)"
          />
        </pattern>
        <image
          id="image0_99_7045"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

function UploadVideoLogo() {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="115"
        height="115"
        fill="url(#pattern0_99_7079)"
      />
      <defs>
        <pattern
          id="pattern0_99_7079"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_99_7079"
            transform="scale(0.0078125)"
          />
        </pattern>
        <image
          id="image0_99_7079"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

function LiveStreamLogo() {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="115"
        height="115"
        fill="url(#pattern0_99_7097)"
      />
      <defs>
        <pattern
          id="pattern0_99_7097"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_99_7097"
            transform="scale(0.0078125)"
          />
        </pattern>
        <image
          id="image0_99_7097"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
