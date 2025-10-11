import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export function useThemeMode() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeMode | null; //user's preference
    const osTheme = mediaQuery.matches ? "dark" : "light"; // OS theme

    return storedTheme ?? osTheme;
  });

  useEffect(() => {
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentOsMode = e.matches ? "dark" : "light";
      setTheme(currentOsMode);
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, setTheme, toggleTheme };
}
