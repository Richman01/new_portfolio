"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True only once mounted on the client — avoids SSR/client markup mismatches
 * without a setState-in-effect. */
export function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
