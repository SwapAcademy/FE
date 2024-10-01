import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TotalPointsCard() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Total Points</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <MedalLogo />
            <p className="text-gray-700 text-2xl font-medium">
              <span className="text-6xl font-bold">150</span>
              pts
            </p>
          </div>
          <div className="text-sm flex flex-col items-start gap-4">
            <p className="text-gray-500">
              Looking to boost your skills? Get more points now
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600 font-bold">
              Get More Points
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MedalLogo() {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="61"
        height="61"
        fill="url(#pattern0_132_755)"
      />
      <defs>
        <pattern
          id="pattern0_132_755"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_132_755"
            transform="scale(0.0078125)"
          />
        </pattern>
        <image
          id="image0_132_755"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
