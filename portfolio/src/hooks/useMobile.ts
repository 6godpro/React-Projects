import { useEffect, useState } from "react";

/**
 * Custom hook that detects if the user is on a mobile viewport.
 * @param breakpoint - The maximum width (in px) considered as mobile. Defaults to 768.
 * @returns boolean - true if window width is less than or equal to the breakpoint.
 */
export const useMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
