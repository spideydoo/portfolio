import "./Form.css";
import { useState } from "react";

export function Form({ intentValue = "" }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // field states for controlled inputs
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // this will be attached to the email but not shown in the UI
  // const [intent, setIntent] = useState(intentValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xwvpgrkz", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Formspree error");
      }

      // success: clear fields
      setFormValues({ name: "", email: "", message: "" });

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err) {
      if (!navigator.onLine) {
        setErrorMessage(
          "Network offline. Check your connection and try again."
        );
      } else {
        setErrorMessage(
          "Something went wrong. Please check connection and try again."
        );
      }

      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 3500);
    }
  };

  if (status === "success") {
    return (
      <div className="success-message">
        Thank you! Your message was sent. A response will be sent to your Email.
      </div>
    );
  }

  if (status === "error") {
    return <div className="error-message">{errorMessage}</div>;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      {/* Hidden field that gets sent to Formspree */}
      <input type="hidden" name="intent" value={intentValue} />

      <label htmlFor="name">Name</label>
      <input
        className="field"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        autoComplete="on"
        required
        value={formValues.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        className="field"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        autoComplete="on"
        required
        value={formValues.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message</label>
      <textarea
        className="field"
        name="message"
        id="message"
        placeholder="Message"
        rows={5}
        autoComplete="on"
        required
        value={formValues.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="submit-button page-button"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

/* import "./Form.css";
import { useForm, ValidationError } from "@formspree/react";

export function Form() {
  const [state, handleSubmit] = useForm("xwvpgrkz");

  if (state.succeeded) {
    return (
      <div className="success-message">
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
        autoComplete="on"
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
        autoComplete="on"
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
} */

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
