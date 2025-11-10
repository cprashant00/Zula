import React, { useState } from "react";
import "./AppBrain.css";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`promote-card ${isOpen ? "open" : ""}`}
          >
            <button className="accordion-header" onClick={() => toggle(index)}>
              <span className="accordion-title">{item.title}</span>
              <span
                className={`accordion-arrow ${isOpen ? "rotate" : ""}`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="accordion-content">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
