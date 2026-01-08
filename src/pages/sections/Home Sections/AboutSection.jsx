export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h3 className="section-title">
        About Me<span className="sub-title">_A Little About Me</span>
      </h3>
      {/* <p className="section-description-copy">
          No chaos, no guesswork. Just a simple, repeatable process.
        </p> */}
      <p className="about-text">
        I'm a web designer and developer who enjoys turning vague ideas into
        clear interfaces. I care about how things work, how they feel, and
        whether they will actually solve a problem.I value clear communication,
        thoughtful design decisions, and practical solutions that support real
        business goals.
      </p>
      <p className="about-text">
        I'm building my career in web design and development with a strong focus
        on fundamentals. I believe good websites should be easy to use, easy to
        maintain, and quietly confident.
      </p>
      <p className="about-text">
        I'm early in my career but I believe that I can produce the best
        websites you could ever wish for.
      </p>
      <section className="principles-section">
        <p className="sub-title">_My Principles When Working</p>
        <div className="principles-container">
          <div className="principle">
            <img src="icons/Star 1.png" className="bullet" />
            <p className="principle-text">Design with purpose</p>
          </div>
          <div className="principle">
            <img src="icons/Star 1.png" className="bullet" />
            <p className="principle-text">Clarity beats cleverness</p>
          </div>
          <div className="principle">
            <img src="icons/Star 1.png" className="bullet" />
            <p className="principle-text">
              Design decisions should have reasons
            </p>
          </div>
          <div className="principle">
            <img src="icons/Star 1.png" className="bullet" />
            <p className="principle-text">Fast sites are polite sites</p>
          </div>
          <div className="principle">
            <img src="icons/Star 1.png" className="bullet" />
            <p className="principle-text">
              If it's confusing, it's not done yet
            </p>
          </div>
          <div className="principle">
            <img src="icons/Star 1.png" className="bullet" />
            <p className="principle-text">Beautiful Design, Clean Code</p>
          </div>
        </div>
      </section>
    </section>
  );
}
