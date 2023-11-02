"use client";

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

import { useEffect } from "react";

const fontSize = 16;
const padding = 0;
const height = fontSize + padding;

export function Counter({ value }: { value: number }) {
  const formatted = value.toLocaleString();
  const digits = formatted
    .split("")
    .map((char) => {
      const num = parseInt(char);
      if (!isNaN(num)) return num;
      return char;
    })
    .reduce((res: Array<any>, digit, i) => {
      const lastPlace = res.at(res.findLastIndex((val) => !!val.place))?.place;

      if (typeof digit === "number") {
        return [...res, { place: i === 0 ? 1 : lastPlace * 10 }];
      }

      return [...res, digit];
    }, [])
    .reverse();

  return (
    <div
      style={{ fontSize }}
      className="inline-flex overflow-hidden rounded font-mono leading-none text-inherit"
    >
      {digits.map((digit, i) => {
        return typeof digit === "string" ? (
          <span key={i}>{digit}</span>
        ) : (
          <Digit key={i} place={digit.place} value={value} />
        );
      })}
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <span style={{ height: height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </span>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
