import React from "react";
import PrimaryButton from "../../components/ButtonPrimary";
import SecondaryButton from "../../components/ButtonSecondary";

function SuccessPage({ userData, reset }) {
  console.log("--- components / SuccessPage ---", userData);
  return (
    <div className="container flex items-center h-full">
      <div className="flex mx-auto">
        <div className="left sm:w-[516px] w-full">
          <p className="text-fg-highlight-strong font-medium mb-2">Success</p>
          <h1 className="mb-6 sm:text-4xl text-[22px] strong">
            Welcome to IMB,{" "}
            <span className="text-fg-highlight-strong">
              {userData.firstName}
            </span>
          </h1>
          {/* <div className="lg:hidden block mb-10 w-full">
            <video width="353" height="283" autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div> */}
          <p className="p2 mb-10">
            Congratulations on opening your account with us! We're thrilled to
            have you as a part of our community. We make banking a breeze at
            IMB. Feel free to reach out here if you have any questions or need
            assistance.
          </p>

          <div className="actions sm:flex flex-row mt-9 grid grid-cols-2 gap-6 sm:gap-3">
            <PrimaryButton label="Let's Begin" onClick={reset} arrow />
            <SecondaryButton label="Get the App" onClick={reset} />
          </div>
        </div>
        {/* <div className="right hidden lg:block">
          <video width="353" height="283" autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div> */}
      </div>
    </div>
  );
}
// Attach to window so Webflow can access it
window.SuccessPage = SuccessPage;

export default SuccessPage;
