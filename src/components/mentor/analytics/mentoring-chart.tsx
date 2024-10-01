'use client';

import { TrendingUp } from 'lucide-react';
import { LabelList, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A pie chart with a label list';

const chartData = [
  { status: 'completed', sessions: 20, fill: 'var(--color-completed)' },
  { status: 'pending', sessions: 3, fill: 'var(--color-pending)' },
];

const chartConfig = {
  sessions: {
    label: 'Sessions',
  },
  completed: {
    label: 'Completed',
    color: 'hsl(201 96% 32%)',
  },
  pending: {
    label: 'Pending',
    color: 'hsl(199 89% 48%)',
  },
} satisfies ChartConfig;

export function MentoringChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Mentoring Session
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="sessions"
                  hideLabel
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="sessions"
            >
              <LabelList
                dataKey="status"
                className="fill-white"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
