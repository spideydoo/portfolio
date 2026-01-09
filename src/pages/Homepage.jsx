import "./Homepage.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "./sections/Home Sections/HeroSection";
import { HiddenMenu } from "./sections/Home Sections/HiddenMenu";
import { ContactSection } from "./sections/Home Sections/ContactSection";
import { AboutSection } from "./sections/Home Sections/AboutSection";
import { ServicesSection } from "./sections/Home Sections/ServicesSection";
import { WorkSection } from "./sections/Home Sections/WorkSection";
import { TechStack } from "./sections/Home Sections/TechStackSection";
import { WhatIDo } from "./sections/Home Sections/WhatIDo";
import { ProcessSection } from "./sections/Home Sections/ProcessSection";
import { ContactPopup } from "./sections/Home Sections/ContactPopup";

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

function Main({
  isMenuOpen,
  setIsMenuOpen,
  isContactMenuOpen,
  showContactMenu,
  setIsContactMenuOpen,
  intentValue,
  setIntentValue,
  theme,
  toggleTheme,
}) {
  return (
    <main>
      <HiddenMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        showContactMenu={showContactMenu}
        setIntentValue={setIntentValue}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ContactPopup
        isContactMenuOpen={isContactMenuOpen}
        setIsContactMenuOpen={setIsContactMenuOpen}
        intentValue={intentValue}
      />
      <HeroSection setIntentValue={setIntentValue} />
      <div className="section-divider"></div>
      <WhatIDo />
      <WorkSection />
      <ServicesSection
        showContactMenu={showContactMenu}
        setIntentValue={setIntentValue}
      />
      <TechStack />
      <ProcessSection />
      <AboutSection />
      <ContactSection intentValue={intentValue} />
    </main>
  );
}

export function Homepage({
  showMenu,
  isMenuOpen,
  setIsMenuOpen,
  showContactMenu,
  isContactMenuOpen,
  setIsContactMenuOpen,
  intentValue,
  setIntentValue,
  toggleTheme,
  theme,
}) {
  return (
    <>
      <Header
        showMenu={showMenu}
        showContactMenu={showContactMenu}
        setIntentValue={setIntentValue}
      />
      <Main
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isContactMenuOpen={isContactMenuOpen}
        showContactMenu={showContactMenu}
        setIsContactMenuOpen={setIsContactMenuOpen}
        intentValue={intentValue}
        setIntentValue={setIntentValue}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Footer
        showContactMenu={showContactMenu}
        setIntentValue={setIntentValue}
      />
    </>
  );
}
