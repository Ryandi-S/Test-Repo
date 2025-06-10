function Button({ children, variant, imageSource, isDisabled, withIcon }) {
  let className = "";
  let isDisabledClass = "";
  let isDisabledText = "";

  if (variant === "secondary") {
    className = "imb-button-outline";
    if (withIcon) {
      className = "imb-button-outline imb-button-with-icon";
    }
  } else if (withIcon) {
    className = "imb-button-with-icon";
  }
  if (isDisabled) {
    isDisabledClass = "imb-button-disabled";
    isDisabledText = "imb-button-text-disabled";
    if (withIcon) {
      isDisabledClass = "imb-button-with-icon imb-button-disabled";
    }
  }
  return (
    <div className={`imb-button ${className} ${isDisabledClass}`}>
      <p className={`imb-button-text ${isDisabledText}`}>{children}</p>
      <img
        src={imageSource}
        loading="lazy"
        alt=""
        class="imb-button-icon"
      ></img>
    </div>
  );
}

// Attach to window so Webflow can access it
window.Button = Button;
