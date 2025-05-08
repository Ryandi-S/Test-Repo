import React from "react";

function SecondaryButton({ onClick, label, className, border = true, edit }) {
  return (
    <button
      className={`h-10 h-10-outline rounded-full h-10-sm mt-2 !h-10 text-base hover:bg-transparent hover:text-fg-greyscale-strongest hover:opacity-60
        ${className}
        ${!border && "border-none !px-0"}
        ${label === "Cancel" && "text-fg-greyscale-subtler hover:opacity-100"}`}
      onClick={onClick}
    >
      {edit ? (
        <image
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eec86c94548a98c68e50_edit-square.svg"
          alt="edit"
          className="size-6"
        />
      ) : null}
      <span>{label}</span>
      {/* {plus ? <Plus /> : <></>} */}
    </button>
  );
}
// Attach to window so Webflow can access it
window.SecondaryButton = SecondaryButton;

export default SecondaryButton;
