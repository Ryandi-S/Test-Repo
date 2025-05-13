// import React from "react";

const HiddenShowPageFunction = () => {
  console.log("--- HiddenShowPageFunction ---");

  const getToEmailPage = () => {
    const starterPage = document.querySelector("#onboarding-section-0");
    const emailPage = document.querySelector("#onboarding-section-1");
    starterPage.classList.remove("imb-display-block");
    starterPage.classList.add("imb-display-none");
    emailPage.classList.add("imb-display-block");
  }

  const getToPhonePage = () => {
    const emailPage = document.querySelector("#onboarding-section-1");
    const phonePage = document.querySelector("#onboarding-section-2");
    emailPage.classList.remove("imb-display-block");
    emailPage.classList.add("imb-display-none");
    phonePage.classList.add("imb-display-block");
  }

  const getToPersonalDetailsPage = () => {
    const phonePage = document.querySelector("#onboarding-section-2");
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    phonePage.classList.remove("imb-display-block");
    phonePage.classList.add("imb-display-none");
    personalDetailsPage.classList.add("imb-display-block");
  }

  const getToConfirmPage = () => {
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    const confirmPage = document.querySelector("#onboarding-section-4");
    personalDetailsPage.classList.remove("imb-display-block");
    personalDetailsPage.classList.add("imb-display-none");
    confirmPage.classList.add("imb-display-block");
  }

  const getToSuccessPage = () => {
    const confirmPage = document.querySelector("#onboarding-section-4");
    const successPage = document.querySelector("#onboarding-section-5");
    confirmPage.classList.remove("imb-display-block");
    confirmPage.classList.add("imb-display-none");
    successPage.classList.add("imb-display-block");
  }

  const getToStarterPage = () => {
    const successPage = document.querySelector("#onboarding-section-5");
    const starterPage = document.querySelector("#onboarding-section-0");
    successPage.classList.remove("imb-display-block");
    successPage.classList.add("imb-display-none");
    starterPage.classList.add("imb-display-block");
  }

  React.useEffect(() => {
    const input = document.querySelector("#onboarding-0-button-signup");
    if (input) {
      input.addEventListener('click', getToEmailPage);
    }

    const input2 = document.querySelector("#onboarding-1-button-next");
    if (input2) {
      input2.addEventListener('click', getToPhonePage);
    }

    const input3 = document.querySelector("#onboarding-2-button-next");
    if (input3) {
      input3.addEventListener('click', getToPersonalDetailsPage);
    }

    const input4 = document.querySelector("#onboarding-3-button-next");
    if (input4) {
      input4.addEventListener('click', getToConfirmPage);
    }

    const input5 = document.querySelector("#onboarding-4-button-next");
    if (input5) {
      input5.addEventListener('click', getToSuccessPage);
    }

    const input6 = document.querySelector("#onboarding-success-button-begin");
    if (input6) {
      input6.addEventListener('click', getToStarterPage);
    }

    // Clean up to prevent memory leaks
    return () => {
      if (input) {
        input.removeEventListener('click', getToEmailPage);
      }
      if (input2) {
        input2.removeEventListener('click', getToPhonePage);
      }
      if (input3) {
        input3.removeEventListener('click', getToPersonalDetailsPage);
      }
      if (input4) {
        input4.removeEventListener('click', getToConfirmPage);
      }
      if (input5) {
        input5.removeEventListener('click', getToSuccessPage);
      }
      if (input6) {
        input6.removeEventListener('click', getToStarterPage);
      }
    };
  }, []);
  
  return (
    null
  )
}

window.HiddenShowPageFunction = HiddenShowPageFunction;

// export default HiddenShowPageFunction;
