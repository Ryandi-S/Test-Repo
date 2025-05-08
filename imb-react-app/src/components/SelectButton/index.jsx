import React from "react";

function SelectButton({ onClick, idx, selected, label, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-[176px] py-2 flex justify-center border border-border-greyscale-subtler rounded-md cursor-pointer
        ${idx === selected && "bg-bg-accent-subtle border-none"},
        ${className}`}
    >
      <h5 className={`{"font-normal" ${idx === selected} && "!font-medium"}`}>
        {label}
      </h5>
    </button>
  );
}
// Attach to window so Webflow can access it
window.SelectButton = SelectButton;

export default SelectButton;
