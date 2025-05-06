function PrimaryButton({
  onClick,
  arrow,
  className,
  type,
  disabled,
  label,
}) {
  const { mode } = useTheme();
  return (
    <button
      disabled={disabled ? true : false}
      className={
        `btn bg-bg-accent-neutral border-none text-fg-brand-default rounded-full btn-sm mt-2 !h-10 text-base hover:bg-bg-accent-neutral hover:opacity-60
        ${className}
        disabled:opacity-40 disabled:bg-bg-accent-neutral disabled:border-none disabled:text-fg-brand-default
        ${mode === "dark" &&
          "text-fg-greyscale-subtlest disabled:text-fg-greyscale-subtlest"}`
      }
      onClick={onClick}
      type={type}
    >
      {label}
      {/* {arrow ? <FaArrowRight /> : <></>} */}
      {arrow ? "->" : null}
    </button>
  );
}
// Attach to window so Webflow can access it
window.PrimaryButton = PrimaryButton;



function SecondaryButton({
  onClick,
  label,
  className,
  plus,
  border = true,
  edit,
}) {
  return (
    <button
      className={
        `btn btn-outline rounded-full btn-sm mt-2 !h-10 text-base hover:bg-transparent hover:text-fg-greyscale-strongest hover:opacity-60
        ${className}
        ${!border && "border-none !px-0"}
        ${label === "Cancel" && "text-fg-greyscale-subtler hover:opacity-100"}`
      }
      onClick={onClick}
    >
      {edit ? <Image src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eec86c94548a98c68e50_edit-square.svg" alt="edit" className="size-6" /> : <></>}
      {label}
      {/* {plus ? <Plus /> : <></>} */}
    </button>
  );
}
// Attach to window so Webflow can access it
window.SecondaryButton = SecondaryButton;



function SelectButton({
  onClick,
  idx,
  selected,
  label,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={
        `w-[176px] py-2 flex justify-center border border-border-greyscale-subtler rounded-md cursor-pointer
        ${idx === selected && "bg-bg-accent-subtle border-none"},
        ${className}`
      }
    >
      <h5 className={cn("font-normal", idx === selected && "!font-medium")}>
        {label}
      </h5>
    </button>
  );
}
// Attach to window so Webflow can access it
window.SelectButton = SelectButton;



function GetStartedPage({ next }) {
  console.log("--- components / GetStartedPage ---")
  return (
    <div className="container flex lg:grid lg:grid-cols-2 gap-8 items-center relative h-[calc(100vh-64px)]">
      <div>
        <h5 className="mb-2 text-fg-highlight-strong">Get Started</h5>
        <h1 className="strong mb-6 text-fg-greyscale-stronger">
          Start your journey with{" "}
          <span className="text-fg-highlight-strong">Alphie.</span>
        </h1>
        <p className="mb-8 p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="actions flex flex-row mt-9 gap-6">
          <PrimaryButton
            label="Login"
            arrow
            onClick={() => null}
          />
          <SecondaryButton
            label="Sign up now"
            onClick={next}
            className="border-border-highlight-strong hover:border-border-highlight-strong"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <img 
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_flower.svg" 
          alt="flower"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.GetStartedPage = GetStartedPage;