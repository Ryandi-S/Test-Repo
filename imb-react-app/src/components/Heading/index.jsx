function Heading({ children, level, type }) {
  const Tag = `h${level}`; // Dynamically determine the heading tag based on 'level' prop
  let className = "";

  if (type === "primary") {
    className = "imb-color-primary";
  } else if (type === "primary-green") {
    className = "imb-color-primary-green";
  } else if (type === "light") {
    className = "imb-typography-light";
  }
  return <Tag className={className}>{children}</Tag>;
}

// Attach to window so Webflow can access it
window.Heading = Heading;
