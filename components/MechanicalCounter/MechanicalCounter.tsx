import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { Vertical } from "./Vertical";

export interface MechanicalCounterProps {
  text: string | number;
}

const transition = { ease: "easeOut" };

export function MechanicalCounter({ text }: MechanicalCounterProps) {
  const [isLoaded, set] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const getTextStats = useMemo(() => generateTextStats(ref), [ref]);

  // We need to wait until we have the ref
  // so we can calculate the font height
  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      typeof document.fonts.ready === "object"
    ) {
      document.fonts.ready.finally(() => set(true));
    } else {
      set(true);
    }
  }, []);

  if (!isLoaded) {
    // Opacity 0 since we only really want to get the ref
    // to calculate the font height
    return (
      <div className="h-[1em] leading-[1em] opacity-0">
        <span ref={ref}>{text}</span>
      </div>
    );
  }

  const textArray = String(text).split("");
  const stats = textArray.map(getTextStats);
  const totalWidth = Math.ceil(stats.reduce(count, 0));

  return (
    <motion.div
      className="relative h-[1em] overflow-hidden leading-[1em]"
      initial={{
        width: totalWidth,
      }}
      animate={{
        width: totalWidth,
      }}
      transition={transition}
    >
      {/* this is the text that the user can select and copy */}
      <span className="absolute top-0 left-0 text-transparent" ref={ref}>
        {text}
      </span>

      <AnimatePresence initial={false}>
        {textArray.map((letter, index) => {
          const x = stats.slice(0, index).reduce(count, 0);
          const width = stats[index];

          // animate from the right to left, so we need to invert the index
          const key = `${textArray.length - index}`;

          return (
            <motion.span
              className="pointer-events-none absolute top-0 left-0"
              key={key}
              layoutId={key}
              animate={{ x, width, opacity: 1 }}
              initial={{ x, width, opacity: 0 }}
              exit={{ width: 0, opacity: 0 }}
              transition={transition}
              aria-hidden="true"
            >
              <Vertical letter={letter} />
            </motion.span>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

function count(acc: number, curr: number) {
  return acc + curr;
}

function generateTextStats(ref: React.RefObject<HTMLDivElement>) {
  const cache = new Map<string, number>();

  // safety for nodejs/ssr
  if (typeof document === "undefined") {
    return function (letter: string): number {
      return cache.get(letter) ?? 0;
    };
  }

  let hasCalculatedFont = false;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  return function (letter: string): number {
    if (!cache.has(letter)) {
      if (!hasCalculatedFont) {
        context.font = getFont(ref.current ?? document.body);
        hasCalculatedFont = true;
      }
      cache.set(letter, context.measureText(letter)?.width ?? 0);
    }

    return cache.get(letter) ?? 0;
  };
}

function getFont(element: HTMLElement) {
  const font = getComputedStyle(element).getPropertyValue("font");

  if (font) {
    return font;
  }

  const fontFamily = getComputedStyle(element).getPropertyValue("font-family");
  const fontSize = getComputedStyle(element).getPropertyValue("font-size");

  return `${fontSize} / ${fontSize} ${fontFamily}`;
}
