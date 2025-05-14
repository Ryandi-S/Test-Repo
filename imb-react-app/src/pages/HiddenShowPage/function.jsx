/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = (ReactProp) => {
  const React = window.React || ReactProp;
  console.log("--- HiddenShowPageFunction ---");
  // page functions

  const getToEmailPage = () => {
    const starterPage = document.querySelector("#onboarding-section-0");
    const emailPage = document.querySelector("#onboarding-section-1");
    hideElement(starterPage);
    showElement(emailPage);
  };

  const getToPhonePage = () => {
    const emailPage = document.querySelector("#onboarding-section-1");
    const phonePage = document.querySelector("#onboarding-section-2");
    const errorElement = document.querySelector(".imb-input-error-message");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputEmailValue = document.querySelectorAll("input")[0].value;
    if (inputEmailValue === "" || inputEmailValue === undefined) {
      showElement(errorElement);
    } else {
      if (emailRegex.test(inputEmailValue)) {
        hideElement(errorElement);
        hideElement(emailPage);
        return showElement(phonePage);
      }
      return showElement(errorElement);
    }
  };
  const getToPersonalDetailsPage = () => {
    const phonePage = document.querySelector("#onboarding-section-2");
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    const errorPhoneElement = phonePage.querySelector(
      ".imb-input-error-message"
    );
    //number must be 10 digits and number only
    const phoneRegex = /^[0-9]{10}$/;
    const inputPhoneBalue = phonePage.querySelectorAll("input")[0].value;

    if (inputPhoneBalue === "" || inputPhoneBalue === undefined) {
      return showElement(errorPhoneElement);
    } else {
      if (phoneRegex.test(inputPhoneBalue)) {
        console.log("valid phone number");
        hideElement(errorPhoneElement);
        hideElement(phonePage);
        return showElement(personalDetailsPage);
      }
      console.log("invalid phone number");
      return showElement(errorPhoneElement);
    }
  };
  const getToConfirmPage = () => {
    const personalDetailsPage = document.querySelector("#onboarding-section-3");
    const confirmPage = document.querySelector("#onboarding-section-4");
    const firstName = personalDetailsPage.querySelector(
      "#onboarding-input-firstname"
    );
    const middleName = personalDetailsPage.querySelector(
      "#onboarding-input-middlename"
    );
    const lastName = personalDetailsPage.querySelector(
      "#onboarding-input-lastname"
    );
    const errorFirstNameElement = firstName.querySelector(
      ".imb-input-error-message"
    );
    const errorMiddleNameElement = middleName.querySelector(
      ".imb-input-error-message"
    );
    const errorLastNameElement = lastName.querySelector(
      ".imb-input-error-message"
    );
    const firstNameValue = firstName.querySelectorAll("input")[0].value;
    const middleNameValue = middleName.querySelectorAll("input")[0].value;
    const lastNameValue = lastName.querySelectorAll("input")[0].value;
    if (firstNameValue === "" || firstNameValue === undefined) {
      return showElement(errorFirstNameElement);
    }
    if (middleNameValue === "" || middleNameValue === undefined) {
      return showElement(errorMiddleNameElement);
    }
    if (lastNameValue === "" || lastNameValue === undefined) {
      return showElement(errorLastNameElement);
    } else {
      hideElement(errorFirstNameElement);
      hideElement(errorMiddleNameElement);
      hideElement(errorLastNameElement);
      hideElement(personalDetailsPage);
      return showElement(confirmPage);
    }
  };
  const getToSuccessPage = () => {
    const confirmPage = document.querySelector("#onboarding-section-4");
    const successPage = document.querySelector("#onboarding-section-5");
    hideElement(confirmPage);
    showElement(successPage);
  };
  const getToStarterPage = () => {
    const successPage = document.querySelector("#onboarding-section-5");
    const starterPage = document.querySelector("#onboarding-section-0");
    hideElement(successPage);
    showElement(starterPage);
  };

  // attach events
  React.useEffect(() => {
    const input = document.querySelector("#onboarding-0-button-signup");
    const input2 = document.querySelector("#onboarding-1-button-next");
    const input3 = document.querySelector("#onboarding-2-button-next");
    const input4 = document.querySelector("#onboarding-3-button-next");
    const input5 = document.querySelector("#onboarding-4-button-next");
    const input6 = document.querySelector("#onboarding-success-button-begin");

    const errorElement = document.getElementsByClassName(
      "imb-input-error-message"
    );
    if (errorElement) {
      for (let i = 0; i < errorElement.length; i++) {
        errorElement[i].classList.add("imb-display-none");
      }
    }

    if (input) {
      input.addEventListener("click", getToEmailPage);
    }
    if (input2) {
      input2.addEventListener("click", getToPhonePage);
    }
    if (input3) {
      input3.addEventListener("click", getToPersonalDetailsPage);
    }
    if (input4) {
      input4.addEventListener("click", getToConfirmPage);
    }
    if (input5) {
      input5.addEventListener("click", getToSuccessPage);
    }
    if (input6) {
      input6.addEventListener("click", getToStarterPage);
    }

    // Clean up to prevent memory leaks
    return () => {
      if (input) {
        input.removeEventListener("click", getToEmailPage);
      }
      if (input2) {
        input2.removeEventListener("click", getToPhonePage);
      }
      if (input3) {
        input3.removeEventListener("click", getToPersonalDetailsPage);
      }
      if (input4) {
        input4.removeEventListener("click", getToConfirmPage);
      }
      if (input5) {
        input5.removeEventListener("click", getToSuccessPage);
      }
      if (input6) {
        input6.removeEventListener("click", getToStarterPage);
      }
    };
  }, []);

  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
