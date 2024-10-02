'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A bar chart';

const chartData = [
  { day: 'Sen', hours: 1 },
  { day: 'Sel', hours: 3 },
  { day: 'Rab', hours: 2 },
  { day: 'Kam', hours: 4 },
  { day: 'Jum', hours: 2 },
  { day: 'Sab', hours: 1 },
  { day: 'Min', hours: 3 },
];

const chartConfig = {
  hours: {
    label: 'Hours',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function ProgressCard() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="mx-auto w-full max-h-[300px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="hours"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickCount={5}
              tickFormatter={(value) => `${value}h`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="hours" fill="var(--color-hours)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
