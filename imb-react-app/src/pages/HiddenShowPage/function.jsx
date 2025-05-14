const HiddenShowPageFunction = (ReactProp) => {
  const React = window.React || ReactProp;
  console.log("--- HiddenShowPageFunction ---");

  // util functions
  const showElement = (element) => {
    if (element){
      element.classList.add("imb-display-block");
      element.classList.remove("imb-display-none");
    }
  }
  const hideElement = (element) => {
    if (element){
      element.classList.remove("imb-display-block");
      element.classList.add("imb-display-none");
    }
  }

  // page functions
  const getToEmailPage = () => {
    const starterPage = document.querySelector("#onboarding-section-0");
    const emailPage = document.querySelector("#onboarding-section-1");
    hideElement(starterPage);
    showElement(emailPage);
  }
  const getToPhonePage = () => {
    const emailPage = document.querySelector("#onboarding-section-1");
    const phonePage = document.querySelector("#onboarding-section-2");
    hideElement(emailPage);
    showElement(phonePage);
  }
  const getToPersonalDetailsPage = () => {
    const phonePage = document.querySelector("#onboarding-section-2");
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    hideElement(phonePage);
    showElement(personalDetailsPage);
  }
  const getToConfirmPage = () => {
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    const confirmPage = document.querySelector("#onboarding-section-4");
    hideElement(personalDetailsPage);
    showElement(confirmPage);
  }
  const getToSuccessPage = () => {
    const confirmPage = document.querySelector("#onboarding-section-4");
    const successPage = document.querySelector("#onboarding-section-5");
    hideElement(confirmPage);
    showElement(successPage);
  }
  const getToStarterPage = () => {
    const successPage = document.querySelector("#onboarding-section-5");
    const starterPage = document.querySelector("#onboarding-section-0");
    hideElement(successPage);
    showElement(starterPage);
  }

  // attach events
  React.useEffect(() => {
    const input = document.querySelector("#onboarding-0-button-signup");
    const input2 = document.querySelector("#onboarding-1-button-next");
    const input3 = document.querySelector("#onboarding-2-button-next");
    const input4 = document.querySelector("#onboarding-3-button-next");
    const input5 = document.querySelector("#onboarding-4-button-next");
    const input6 = document.querySelector("#onboarding-success-button-begin");

    if (input) {
      input.addEventListener('click', getToEmailPage);
    }
    if (input2) {
      input2.addEventListener('click', getToPhonePage);
    }
    if (input3) {
      input3.addEventListener('click', getToPersonalDetailsPage);
    }
    if (input4) {
      input4.addEventListener('click', getToConfirmPage);
    }
    if (input5) {
      input5.addEventListener('click', getToSuccessPage);
    }
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