import React from "react";
// import PrimaryButton from "../../components/ButtonPrimary";
// import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from "../../components/ButtonPrimary";
import SecondaryButton from "../../components/ButtonSecondary";

function GetStartedPage({ next }) {
  return (
    <div className="container flex lg:grid lg:grid-cols-2 gap-8 items-center relative h-[calc(100vh-64px)]">
      <div>
        <h5 className="mb-2 text-fg-highlight-strong">Get Started</h5>
        <h1 className="strong mb-6 text-fg-greyscale-stronger">
          Start your journey with{" "}
          <span className="text-fg-highlight-strong">IMB.</span>
        </h1>
        <p className="mb-8 p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="actions flex flex-row mt-9 gap-6">
          <PrimaryButton label="Login" arrow onClick={() => null} />
          <SecondaryButton
            label="Sign up now"
            onClick={next}
            className="border-border-highlight-strong hover:border-border-highlight-strong"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eb4ada84cde075a54387_5425c564983d58e4623f90ada8f86ccd_flower.svg"
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

export default GetStartedPage;
