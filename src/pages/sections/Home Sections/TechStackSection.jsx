import { useState } from "react";

const tools = [
  {
    image: "react.svg",
    name: "React",
    info: "React is a robust library for building dynamic web apps with reusable components.",
  },
  {
    image: "html-5-1.png",
    name: "HTML",
    info: "HTML is the backbone of web pages, providing structure and content.",
  },
  {
    image: "css3.png",
    name: "CSS",
    info: "CSS is used to style web pages, control layout, colors, fonts, and responsiveness.",
  },
  {
    image: "js.png",
    name: "JavaScript",
    info: "JavaScript is a scripting language that makes websites interactive and dynamic.",
  },
  {
    image: "figma.png",
    name: "Figma",
    info: "Figma is a design tool for creating beautiful and collaborative UI/UX designs.",
  },
  {
    image: "photoshop.png",
    name: "Adobe Photoshop",
    info: "Photoshop is used for editing and composing raster images for web and print.",
  },
  {
    image: "illustrator.png",
    name: "Adobe Illustrator",
    info: "Illustrator is used for creating vector graphics, logos, and illustrations.",
  },
];

export function TechStack() {
  // Initial state: no tool selected
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <section className="tech-stack-section">
      <h3 className="section-title">
        My Tech Stack <span className="sub-title">_The Tools I Use</span>
      </h3>

      <div className="tech-stack-container">
        {/* Tool icons */}
        <ul className="tech-stack-list">
          {tools.map((tool, index) => (
            <li
              key={index}
              className={`tech-stack-tool ${
                selectedTool?.name === tool.name ? "active" : ""
              }`}
              onClick={() => setSelectedTool(tool)}
            >
              <img src={`icons/tech-stack/${tool.image}`} alt={tool.name} />
            </li>
          ))}
        </ul>

        {/* Selected tool info or initial placeholder */}
        <div className="tech-stack-info">
          <div className="img-container">
            <img
              src={
                selectedTool
                  ? `icons/tech-stack/${selectedTool.image}`
                  : "icons/tech-stack/Tools.png"
              }
              alt={
                selectedTool ? selectedTool.name : "Click a tool for more info"
              }
            />
          </div>
          <div className="description">
            {selectedTool
              ? selectedTool.info
              : "Click on a tool to see more information."}
          </div>
        </div>
      </div>
    </section>
  );
}
