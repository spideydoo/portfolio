import "./Footer.css";

export function Footer({ showContactMenu, setIntentValue }) {
  return (
    <footer className="footer">
      <div className="cta">
        <img className="arrow" src="assets/Arrow 1.png" />
        <div
          onClick={() => {
            showContactMenu();
            setIntentValue("let's_start_a_project");
          }}
          className="lets-start-project"
        >
          Let's Start a Project
        </div>
      </div>
      <div className="copywrite">
        &copy; 2026 Sam. Designed and built with care.
      </div>
    </footer>
  );
}
