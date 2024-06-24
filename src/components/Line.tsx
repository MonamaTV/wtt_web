import { LineChart } from "@tremor/react";

export function LineChartHero({ data }: { data: [] }) {
  return (
    <LineChart
      className="w-full h-96 sm:p-10"
      data={data}
      index="played_at"
      showGridLines={false}
      // showYAxis={false}
      showXAxis={true}
      categories={["wpm", "accuracy"]}
      colors={["yellow", "gray"]}
      onValueChange={(v) => console.log(v)}
    />
  );
}
