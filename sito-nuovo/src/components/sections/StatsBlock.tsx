"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsBlockProps {
  stats: Stat[];
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <p className="font-heading text-4xl font-semibold text-gold">
        {value}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-2 text-sm text-cream/80">{stat.label}</p>
    </div>
  );
}

export function StatsBlock({ stats }: StatsBlockProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
