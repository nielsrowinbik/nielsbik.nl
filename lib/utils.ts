import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function sum(arr: number[]) {
  return arr.reduce((acc, val) => acc + val, 0);
}
function sqrSum(arr: number[]) {
  return arr.reduce((acc, val) => val * val + acc, 0);
}

/**
 * Find the slope (a) and y-intercept (b) of the best suited line for the passed data.
 * @param {Array} x X-data points.
 * @param {Array} y Y-data points.
 * @return {Array}  Array containing slope and y-intercept values.
 */
export const findRegressionLine = (x: number[], y: number[]) => {
  if (x.length !== y.length) {
    throw Error("Arrays not of the same length.");
  }
  const n = x.length;
  const sumX = sum(x);
  const sumY = sum(y);
  const sumXY = x.reduce((acc, val, index) => acc + val * y[index], 0);
  const sqrSumX = sqrSum(x);
  const a = (n * sumXY - sumX * sumY) / (n * sqrSumX - sumX * sumX);
  const b = (sumY * sqrSumX - sumX * sumXY) / (n * sqrSumX - sumX * sumX);

  return [a, b];
};
