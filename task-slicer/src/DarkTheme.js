import { useState, useEffect } from "react";
// import clsx from "clsx";

export default function DarkTheme() {
  const [theme, setTheme] = useState("Light");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
      document.body.classList.add("borderLight");
      console.log(theme);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.remove("borderLight");
      console.log(theme);
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
