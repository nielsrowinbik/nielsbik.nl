"use client";

import { useHasFocus } from "@/lib/use-has-focus";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RevalidateOnFocus() {
  const windowFocused = useHasFocus();
  const router = useRouter();

  useEffect(() => {
    if (windowFocused) router.refresh();
  }, [router, windowFocused]);

  return null;
}
