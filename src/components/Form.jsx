import "./Form.css";
import { useForm, ValidationError } from "@formspree/react";

export function Form() {
  const [state, handleSubmit] = useForm("xwvpgrkz");

  if (state.succeeded) {
    return (
      <div className="sucess-message">
        Thank you! Your message was sent. A response will be sent to your email.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className="field"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">Email</label>
      <input
        className="field"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea
        className="field"
        name="message"
        id="message"
        placeholder="Message"
        rows={5}
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        className="submit-button page-button"
        type="submit"
        disabled={state.submitting}
      >
        Send
      </button>
    </form>
  );
}

/* import "./Form.css";

export function Form() {
  return (
    <form className="contact-form" action="-" method="post">
      <label htmlFor="">Name</label>
      <input
        className="field"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <label htmlFor="">Email</label>
      <input
        className="field"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <label htmlFor="">Name</label>
      <textarea
        className="field"
        name="text-area"
        id="text-area"
        placeholder="Message"
      ></textarea>
      <button className="submit-button page-button" type="submit">
        Send
      </button>
    </form>
  );
}
 */
