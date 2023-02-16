import { useState, useEffect } from "react";
// import clsx from "clsx";

export default function DarkTheme() {
  const [theme, setTheme] = useState("Light");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  }
  return (
    <button className="theme-switcher" onClick={() => toggleTheme()}>
      {theme}
    </button>
  );
}
