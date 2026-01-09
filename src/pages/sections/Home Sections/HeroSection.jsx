export function HeroSection({ setIntentValue }) {
  return (
    <>
      <section className="hero-section" id="home">
        {/* <Scribble /> */}

        <div className="logo">
          SAM.
          <img className="crown-img" src="assets/Crown.png" />
        </div>
        <div className="hero-text">
          <h1 className="headline">
            {/* I{" "}
            <a href="#services">
              <span>
                design <div className="hover-underline"></div>
              </span>
            </a>{" "}
            &{" "}
            <a href="#services">
              <span>
                build <div className="hover-underline"></div>
              </span>
            </a>{" "}
            websites that work as good as they look. */}
            I{" "}
            <a href="#services">
              <span>
                design <div className="hover-underline"></div>
              </span>
            </a>{" "}
            &{" "}
            <a href="#services">
              <span>
                build <div className="hover-underline"></div>
              </span>
            </a>{" "}
            websites that look amazing—and work even better.
          </h1>
        </div>
        <div className="hero-cta-container">
          <a href="#projects" className="page-button view-work hero-cta">
            View My Work
          </a>
          <a
            href="#contact"
            className="page-button get-in-touch hero-cta"
            onClick={() => {
              setIntentValue("get_in_touch");
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
