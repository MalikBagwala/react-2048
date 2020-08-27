import { useEffect } from "react";

export type ArrowKeyType = "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown";
function useHotkey(func: (type: ArrowKeyType) => void) {
  useEffect(() => {
    function handleChange(e: KeyboardEvent) {
      if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowUp"
      ) {
        func(e.key);
      }
    }
    document.addEventListener("keydown", handleChange);

    return function cleanup() {
      document.removeEventListener("keydown", handleChange);
    };
  }, [func]);
}

export default useHotkey;
