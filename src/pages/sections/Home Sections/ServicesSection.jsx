export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h3 className="section-title">
        My Services <span className="sub-title">_Things I'm Good At</span>
      </h3>
      <p className="section-description-copy">
        I offer focused, practical services for people who want their website to
        do its job and do it well.
      </p>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-header">
            <div className="img-container">
              <img
                className="service-image"
                src="icons/services/web-page-icon.svg"
              />
            </div>
            <div className="service-name">Web Design</div>
          </div>
          <div className="service-description">
            I offer focused, practical services for people who want their
            website to do its job and do it well.
          </div>
        </div>
        <div className="service-card">
          <div className="service-header">
            <div className="img-container">
              <img className="service-image" src="icons/services/code.png" />
            </div>
            <div className="service-name">Web Development</div>{" "}
          </div>
          <div className="service-description">
            I offer focused, practical services for people who want their
            website to do its job and do it well.
          </div>
        </div>
        <div className="service-card">
          <div className="service-header">
            <div className="img-container">
              <img
                className="service-image"
                src="icons/services/pen-tool-vector-design-icon.svg"
              />
            </div>
            <div className="service-name">Graphic Design</div>
          </div>{" "}
          <div className="service-description">
            I offer focused, practical services for people who want their
            website to do its job and do it well.
          </div>
        </div>
      </div>

      <div className="request-service-container">
        <button className="request-service page-button">
          Request My Service
        </button>
      </div>
    </section>
  );
}
