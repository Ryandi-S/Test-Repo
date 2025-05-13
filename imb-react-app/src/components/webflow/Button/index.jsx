function PrimaryButton({ onClick, arrow, className, type, disabled, label }) {
  return (
    <button
      disabled={disabled ? true : false}
      className={`h-10 bg-bg-accent-neutral border-none text-fg-brand-default rounded-full h-10-sm mt-2 !h-10 text-base hover:bg-bg-accent-neutral hover:opacity-60
        ${className}
        disabled:opacity-40 disabled:bg-bg-accent-neutral disabled:border-none disabled:text-fg-brand-default`}
      onClick={onClick}
      type={type}
    >
      {label}
      {/* {arrow ? <FaArrowRight /> : <></>} */}
      {arrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
}
// Attach to window so Webflow can access it
window.PrimaryButton = PrimaryButton;

export default PrimaryButton;
