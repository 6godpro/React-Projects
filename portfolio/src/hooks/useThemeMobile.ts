import { useEffect, useState } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const html = document.documentElement;
    let storedTheme = localStorage.getItem("theme");

    const resolvedTheme = (theme ??
      storedTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")) as "light" | "dark";

    html.classList.remove("light", "dark");
    html.classList.add(resolvedTheme);

    if (storedTheme !== resolvedTheme) {
      localStorage.setItem("theme", resolvedTheme);
    }

    if (theme !== resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [theme]);

  return { theme, toggleTheme };
};
