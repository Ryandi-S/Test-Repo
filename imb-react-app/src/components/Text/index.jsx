function Text({ type = "", children }) {
  let className = "";

  if (type === "bold") {
    className = "imb-typography-bold";
  } else if (type === "primary") {
    className = "imb-color-primary";
  } else if (type === "primary-green") {
    className = "imb-color-primary-green";
  } else if (type === "hidden") {
    className = "imb-display-none";
  }

  return <p className={className}>{children}</p>;
}

// Attach to window so Webflow can access it
window.Text = Text;
