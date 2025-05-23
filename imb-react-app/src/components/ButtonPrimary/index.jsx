// import React from "react";

function PrimaryButton({ text = "Button" }) {
  return (
    <div className="w-layout-cell">
      <div className="imb-button imb-button-with-icon">
        <p className="imb-button-text">{text}</p>
        <img
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/681ab0b5ef7173dfb95a2ded_arrow.svg"
          loading="lazy"
          alt=""
          className="imb-button-icon"
        />
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.PrimaryButton = PrimaryButton;

export default PrimaryButton;
