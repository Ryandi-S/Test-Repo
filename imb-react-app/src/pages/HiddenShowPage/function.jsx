/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = (ReactProp) => {
  const React = window.React || ReactProp;
  console.log("--- HiddenShowPageFunction ---");

  // page elements
  const starterPage = React.useRef(null);
  const emailPage = React.useRef(null);
  const phonePage = React.useRef(null);
  const personalDetailsPage = React.useRef(null);
  const confirmPage = React.useRef(null);
  const successPage = React.useRef(null);

  const input = React.useRef(null);
  const input2 = React.useRef(null);
  const input3 = React.useRef(null);
  const input4 = React.useRef(null);
  const input5 = React.useRef(null);
  const input6 = React.useRef(null);

  React.useEffect(() => {
    starterPage.current = document.querySelector("#onboarding-section-0");
    emailPage.current = document.querySelector("#onboarding-section-1");
    phonePage.current = document.querySelector("#onboarding-section-2");
    personalDetailsPage.current = document.querySelector(
      "#onboarding-section-3"
    );
    confirmPage.current = document.querySelector("#onboarding-section-4");
    successPage.current = document.querySelector("#onboarding-section-5");

    input.current = document.querySelector("#onboarding-0-button-signup");
    input2.current = document.querySelector("#onboarding-1-button-next");
    input3.current = document.querySelector("#onboarding-2-button-next");
    input4.current = document.querySelector("#onboarding-3-button-next");
    input5.current = document.querySelector("#onboarding-4-button-next");
    input6.current = document.querySelector("#onboarding-success-button-begin");
  }, []);

  // page states
  const [isValidated, setIsValidated] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(starterPage.current);
  // console.log("currentPage", currentPage);
  const [formData, setFormData] = React.useState({
    email: "",
    phone: "",
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const handleStepper = (page, step) => {
    console.log("handleStepper", page, step);
    const stepper = page.querySelectorAll(".imb-stepper-step-block");
    //set i max to step
    for (let i = 0; i < step; i++) {
      stepper[i].classList.add("imb-stepper-step-active");
    }
  };

  // page functions
  const getToEmailPage = () => {
    hideElement(starterPage.current);
    showElement(emailPage.current);
  };

  const getToPhonePage = () => {
    const errorElement = document.querySelector(".imb-input-error-message");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputEmailValue = document.querySelectorAll("input")[0].value;
    if (inputEmailValue === "" || inputEmailValue === undefined) {
      showElement(errorElement);
    } else {
      if (emailRegex.test(inputEmailValue)) {
        hideElement(errorElement);
        hideElement(emailPage.current);
        handleStepper(phonePage.current, 2);
        return showElement(phonePage.current);
      }
      return showElement(errorElement);
    }
  };

  const getToPersonalDetailsPage = () => {
    const errorPhoneElement = phonePage.current.querySelector(
      ".imb-input-error-message"
    );
    //number must be 10 digits and number only
    const phoneRegex = /^[0-9]{10}$/;
    const inputPhoneBalue =
      phonePage.current.querySelectorAll("input")[0].value;

    if (inputPhoneBalue === "" || inputPhoneBalue === undefined) {
      return showElement(errorPhoneElement);
    } else {
      if (phoneRegex.test(inputPhoneBalue)) {
        console.log("valid phone number");
        hideElement(errorPhoneElement);
        hideElement(phonePage.current);
        handleStepper(personalDetailsPage.current, 3);
        return showElement(personalDetailsPage.current);
      }
      console.log("invalid phone number");
      return showElement(errorPhoneElement);
    }
  };
  const getToConfirmPage = () => {
    const firstName = personalDetailsPage.current.querySelector(
      "#onboarding-input-firstname"
    );
    const middleName = personalDetailsPage.current.querySelector(
      "#onboarding-input-middlename"
    );
    const lastName = personalDetailsPage.current.querySelector(
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
      hideElement(personalDetailsPage.current);
      handleStepper(currentPage);
      setCurrentPage("confirmPage");
      return showElement(confirmPage.current);
    }
  };
  const getToSuccessPage = () => {
    hideElement(confirmPage.current);
    showElement(successPage.current);
  };
  const getToStarterPage = () => {
    hideElement(successPage.current);
    showElement(starterPage.current);
  };

  // attach events
  React.useEffect(() => {
    input?.current.addEventListener("click", getToEmailPage);
    input2?.current.addEventListener("click", getToPhonePage);
    input3?.current.addEventListener("click", getToPersonalDetailsPage);
    input4?.current.addEventListener("click", getToConfirmPage);
    input5?.current.addEventListener("click", getToSuccessPage);
    input6?.current.addEventListener("click", getToStarterPage);

    // Clean up to prevent memory leaks
    return () => {
      input?.current.removeEventListener("click", getToEmailPage);
      input2?.current.removeEventListener("click", getToPhonePage);
      input3?.current.removeEventListener("click", getToPersonalDetailsPage);
      input4?.current.removeEventListener("click", getToConfirmPage);
      input5?.current.removeEventListener("click", getToSuccessPage);
      input6?.current.removeEventListener("click", getToStarterPage);
    };
  }, []);

  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
