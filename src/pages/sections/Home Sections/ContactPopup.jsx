import { Form } from "../../../components/Form";
import { info } from "../../../data";
import "./ContactPopup.css";

/* function Scribble() {
  const scribbles = [
    "../../public/assets/Scribble 1.png",
    "../../public/assets/Scribble 2.png",
    "../../public/assets/Scribble 3.png",
    "../../public/assets/Scribble 4.png",
    "../../public/assets/Scribble 5.png",
    "../../public/assets/Scribble 1.png",
    "../../public/assets/Scribble 2.png",
    "../../public/assets/Scribble 3.png",
    "../../public/assets/Scribble 4.png",
    "../../public/assets/Scribble 5.png",
  ];

  const [positionedScribbles] = useState(() => {
    const maxWidth = window.innerWidth - 120;
    const maxHeight = window.innerHeight * 3;

    return scribbles.map((src) => ({
      src,
      top: Math.random() * maxHeight,
      left: Math.random() * maxWidth,
    }));
  });

  return positionedScribbles.map((img, index) => (
    <img
      key={index}
      src={img.src}
      className="scribble"
      style={{
        top: img.top,
        left: img.left,
      }}
    />
  ));
} */

export function ContactPopup({
  isContactMenuOpen,
  setIsContactMenuOpen,
  intentValue,
}) {
  function closeContactMenu() {
    setIsContactMenuOpen(false);
  }

  return (
    <section
      className={
        isContactMenuOpen
          ? "contact-popup-section exception-section shown"
          : "contact-popup-section exception-section"
      }
    >
      {/* <img src="assets/Scribble 5.png" className="scribble wiggle" />
      <img src="assets/Scribble 1.png" className="scribble wiggle1" />
      <img src="assets/Scribble 2.png" className="scribble wiggle2" />
      <img src="assets/Scribble 3.png" className="scribble wiggle3" />
      <img src="assets/Scribble 4.png" className="scribble wiggle4" /> */}
      <img src="assets/Star 1.png" className="scribble star" />
      <img src="assets/Bar.png" className="scribble bar" />
      <img src="assets/Cross.png" className="scribble cross" />

      <div onClick={closeContactMenu} className="menu-icon">
        <img className="icon" src="icons/close.png" />
      </div>
      <Form intentValue={intentValue} />
      <div className="links">
        <a className="link" href="mailto:spectacularspidey.og@gmail.com">
          <img src="icons/email.png" className="icon" />
          {info.email} <img className="link-icon icon" src="icons/link.svg" />
        </a>
      </div>
    </section>
  );
}
