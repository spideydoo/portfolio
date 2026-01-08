import { Form } from "../../../components/Form";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h3 className="section-title">
        Contact Me{" "}
        <span className="sub-title">_Let's Make Something Together</span>
      </h3>
      <p className="section-description-copy">
        Got an idea, a question, or a website that needs help behaving? I'm all
        ears.
      </p>
      <section className="main">
        <Form />

        <div className="links">
          <a className="link" href="mailto:spectacularspidey.og@gmail.com">
            <img src="icons/email.png" className="icon" />
            spectacularspidey.og@gmail.com{" "}
            <img className="link-icon icon" src="icons/link.svg" />
            {/* <img src="assets/Arrow 4.png" className="scribble arrow" /> */}
          </a>
        </div>
      </section>
    </section>
  );
}
