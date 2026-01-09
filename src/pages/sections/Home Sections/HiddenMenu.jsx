// import { useState } from "react";

export function HiddenMenu({
  isMenuOpen,
  setIsMenuOpen,
  showContactMenu,
  setIntentValue,
  theme,
  toggleTheme,
}) {
  // let [timeoutId, setTimeoutId] = useState();

  function closeMenu() {
    /* clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 3000)
    ); */
    setIsMenuOpen(false);
  }

  return (
    <section className={isMenuOpen ? "hidden-section shown" : "hidden-section"}>
      <div className="dark-layer"></div>
      <div className="hidden-info">
        <div onClick={closeMenu} className="menu-icon">
          <img className="icon" src="icons/close.png" />
        </div>
        <img className="star-img" src="icons/Star 1.png" />
        <p className="info">I'd love to help build your next Big Website</p>
        <div
          className="page-button get-in-touch"
          onClick={() => {
            showContactMenu();
            setIntentValue("get_in_touch");
          }}
        >
          Get in Touch
        </div>
        <button className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </section>
  );
}
