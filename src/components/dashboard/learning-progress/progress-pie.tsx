'use client';

import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

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

export const description = 'A donut chart';

const chartData = [
  { status: 'notStarted', count: 275, fill: 'var(--color-notStarted)' },
  { status: 'inProgress', count: 200, fill: 'var(--color-inProgress)' },
  { status: 'completed', count: 187, fill: 'var(--color-completed)' },
];

const chartConfig = {
  count: {
    label: 'Count',
  },
  inProgress: {
    label: 'In Progress',
    color: 'hsl(var(--chart-1))',
  },
  completed: {
    label: 'Completed',
    color: 'hsl(var(--chart-2))',
  },
  notStarted: {
    label: 'Not Started',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function ProgressPie() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
            />
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
