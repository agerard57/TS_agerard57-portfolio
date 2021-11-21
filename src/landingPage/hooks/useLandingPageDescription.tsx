import { useState } from "react";

type LoopEnded = {
  hasTypeWriterLoopEndedOnce: boolean;
  setHasTypeWriterLoopEndedOnce: React.Dispatch<React.SetStateAction<boolean>>;
};
export function useLandingPageDescription(): LoopEnded {
  const [hasTypeWriterLoopEndedOnce, setHasTypeWriterLoopEndedOnce] =
    useState(false);
  return { hasTypeWriterLoopEndedOnce, setHasTypeWriterLoopEndedOnce };
}
