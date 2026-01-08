import "./App.css";
import { Homepage } from "./pages/Homepage";
import { useState } from "react";

function App() {
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

  return (
    <>
      <Homepage
        showMenu={showMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        showContactMenu={showContactMenu}
        isContactMenuOpen={isContactMenuOpen}
        setIsContactMenuOpen={setIsContactMenuOpen}
      />
    </>
  );
}

export default App;
