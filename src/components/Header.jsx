import "./Header.css";

export function Header({ showMenu, showContactMenu, setIntentValue }) {
  return (
    <header className="header">
      <div className="left-section">
        <a href="#home">
          <img src="images/box dude.jpg" className="profile-pic" />
        </a>
        <div className="availability">
          <p className="availability-text">Available for Work</p>
          <div className="circle"></div>
        </div>
        <nav className="links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="right-section">
        <ul>
          <li className="contact-btn">
            <a className="container" onClick={showContactMenu}>
              <span
                onClick={() => {
                  setIntentValue("contact_me");
                }}
              >
                Contact Me
              </span>
              <img
                className="icon arrow"
                src="icons/arrow_left_alt_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
              />
            </a>
          </li>
          <li className="icon-btn menu" onClick={showMenu}>
            <img
              className="icon"
              src="icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
