import "./App.css";
import { Homepage } from "./pages/Homepage";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  // Initialize theme based on system preference or stored preference
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      // If no saved preference, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      const initialTheme = prefersDark.matches ? "dark" : "light";
      setTheme(initialTheme);
      document.body.setAttribute("data-theme", initialTheme);

      // Listen for system preference changes
      const listener = (e) => {
        // Only update if no saved preference
        if (!localStorage.getItem("theme")) {
          const newTheme = e.matches ? "dark" : "light";
          setTheme(newTheme);
          document.body.setAttribute("data-theme", newTheme);
        }
      };
      prefersDark.addEventListener("change", listener);
      return () => prefersDark.removeEventListener("change", listener);
    }
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // save preference
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  function showMenu() {
    setIsMenuOpen(true);
    setIsContactMenuOpen(false);
  }

  function showContactMenu() {
    setIsContactMenuOpen(true);
    setIsMenuOpen(false);
  }

  const [intentValue, setIntentValue] = useState("");

  return (
    <>
      <Homepage
        showMenu={showMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        showContactMenu={showContactMenu}
        isContactMenuOpen={isContactMenuOpen}
        setIsContactMenuOpen={setIsContactMenuOpen}
        intentValue={intentValue}
        setIntentValue={setIntentValue}
        toggleTheme={toggleTheme}
        theme={theme}
      />
    </>
  );
}

export default App;
