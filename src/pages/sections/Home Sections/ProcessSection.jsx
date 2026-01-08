export function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <h3 className="section-title">
        My Process<span className="sub-title">_How I Build Things</span>
      </h3>
      <p className="section-description-copy">
        No chaos, no guesswork. Just a simple, repeatable process.
      </p>
      <div className="process-container">
        <ul className="process-list">
          <li>
            <div className="title-div">
              <img src="icons/Star 1.png" className="bullet" />
              <p className="process-title">Understand:</p>
            </div>
            <div className="process-description">
              What's the goal, who's it for, and what actually matters.
            </div>
          </li>
          <li>
            <div className="title-div">
              <img src="icons/Star 2.png" className="bullet" />
              <p className="process-title">Plan:</p>
            </div>
            <div className="process-description">
              Structure, content, and layout before colors and polish.
            </div>
          </li>
          <li>
            <div className="title-div">
              <img src="icons/Star 3.png" className="bullet" />
              <p className="process-title">Desing & Build:</p>
            </div>
            <div className="process-description">
              Design with intent, then bring it to life with clean code.
            </div>
          </li>
          <li>
            <div className="title-div">
              <img src="icons/Star 4.png" className="bullet" />
              <p className="process-title">Refine:</p>
            </div>
            <div className="process-description">
              Test, tweak, and make sure everything earns its place.
            </div>
          </li>
        </ul>
        <div className="star-container">
          <img src="assets/Star 1.png" className="star" />
        </div>
      </div>
    </section>
  );
}
