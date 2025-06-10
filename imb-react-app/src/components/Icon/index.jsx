const Icon = ({ imgSrc, variant }) => {
  const variantClass =
    variant === "secondary" ? "imb-icon-button-secondary" : "";
  return (
    <div class={`imb-icon-button  ${variantClass}`}>
      <img src={imgSrc} loading="lazy" alt="" class={`imb-icon-button-icon`} />
    </div>
  );
};

// Attach to window so Webflow can access it
window.Icon = Icon;
