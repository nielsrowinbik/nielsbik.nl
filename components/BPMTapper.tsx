"use client";

import { findRegressionLine } from "@/lib/utils";
import { useState, type MouseEvent, type ReactNode } from "react";

type Tap = [number, number];

const RESET_TIME = 5000;

export function BPMTapper({
  children,
  initial = 0,
}: {
  children: ({ bpm }: { bpm: number }) => ReactNode;
  initial?: number;
}) {
  const [taps, setTaps] = useState<Tap[]>([]);
  const [startTime, setStartTime] = useState<number>();
  const [bpm, setBPMCount] = useState<number>(initial);
  const [resetTimerId, setResetTimerId] = useState<NodeJS.Timeout>();

  function handleTap(e: MouseEvent<HTMLDivElement>) {
    if (!startTime) {
      setStartTime(Date.now());
    }

    const tapsCount = taps.length;
    const timeDiff = startTime ? Date.now() - startTime : 0;

    setTaps([...taps, [tapsCount, timeDiff]]);
    const newBpm = calculateBPM(taps);
    if (newBpm) setBPMCount(newBpm);
    startResetTimer();
  }

  function startResetTimer() {
    clearTimeout(resetTimerId);
    const id = setTimeout(() => reset(), RESET_TIME);
    setResetTimerId(id);
  }

  function reset() {
    setTaps([]);
    setStartTime(undefined);
  }

  function calculateBPM(taps: Tap[]) {
    if (taps.length < 2) {
      return false;
    }

    const sampleNumbers = taps.map((stamp) => stamp[0]);
    const timeDiffs = taps.map((stamp) => stamp[1]);
    const [a] = findRegressionLine(sampleNumbers, timeDiffs);

    return Math.round(60000 / a);
  }

  return (
    <div className="contents" onClick={handleTap}>
      {children({ bpm })}
    </div>
  );
}
