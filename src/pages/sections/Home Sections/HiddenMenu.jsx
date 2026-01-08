// import { useState } from "react";

export function HiddenMenu({ isMenuOpen, setIsMenuOpen, showContactMenu }) {
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
        <p className="info">I'd love to help build your next website...hehe</p>
        <div className="page-button get-in-touch" onClick={showContactMenu}>
          Get in Touch
        </div>
      </div>
    </section>
  );
}
