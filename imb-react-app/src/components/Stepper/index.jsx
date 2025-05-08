import React from "react";

function Stepper({ step, maxStep, className }) {
  console.log("--- components / Stepper ---");
  const renderItems = () => {
    const elements = [];
    for (let i = 0; i < maxStep; i++) {
      elements.push(
        <div
          key={i}
          className={`sm:w-12 w-full h-1 rounded-lg mr-1
                      ${
                        i < step
                          ? "bg-fg-highlight-neutral"
                          : "bg-bg-greyscale-subtle"
                      }`}
        />
      );
    }
    return elements;
  };

  return <div className={`flex flex-row ${className}`}>{renderItems()}</div>;
}
// Attach to window so Webflow can access it
window.Stepper = Stepper;

export default Stepper;
