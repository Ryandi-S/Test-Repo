/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = (ReactProp) => {
  const React = window.React || ReactProp;

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

  const inputEmail = React.useRef(null);
  const inputEmailErrMsg = React.useRef(null);

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

    inputEmail.current = document.querySelector(
      "#onboarding-input-email input"
    );
    inputEmailErrMsg.current = document.querySelector(
      "#onboarding-input-email .imb-input-error-message"
    );
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
    if (!isValidEmail(formData.email)) {
      setIsValidated(true);
      return false;
    } else {
      setIsValidated(false);
      hideElement(emailPage.current);
      handleStepper(phonePage.current, 2);
      showElement(phonePage.current);
    }
  };

  const getToPersonalDetailsPage = () => {
    const errorPhoneElement = phonePage.current.querySelector(
      ".imb-input-error-message"
    );
    //number must be 10 digits and number only
    const phoneRegex = /^[0-9]{10}$/;
    const inputPhoneValue =
      phonePage.current.querySelectorAll("input")[0].value;

    if (inputPhoneValue === "" || inputPhoneValue === undefined) {
      return showElement(errorPhoneElement);
    } else {
      if (phoneRegex.test(inputPhoneValue)) {
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
      // handleStepper(confirmPage.current, 4);
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

  const handleChangeEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  React.useEffect(() => {
    // validate the email step
    console.log("handleChangeEmail / formData.email :", formData.email);
    if (isValidated && !formData.email) {
      inputEmailErrMsg.current.innerHTML = "Email field is required";
      showElement(inputEmailErrMsg.current);
    } else if (isValidated && !isValidEmail(formData.email)) {
      inputEmailErrMsg.current.innerHTML = "Invalid email address";
      showElement(inputEmailErrMsg.current);
    } else {
      hideElement(inputEmailErrMsg.current);
    }
  }, [formData.email, isValidated]);

  // attach events
  React.useEffect(() => {
    input.current.addEventListener("click", getToEmailPage);
    input2.current.addEventListener("click", getToPhonePage);
    input3.current.addEventListener("click", getToPersonalDetailsPage);
    input4.current.addEventListener("click", getToConfirmPage);
    input5.current.addEventListener("click", getToSuccessPage);
    input6.current.addEventListener("click", getToStarterPage);

    inputEmail.current.addEventListener("input", handleChangeEmail);

    // Clean up to prevent memory leaks
    return () => {
      input.current.removeEventListener("click", getToEmailPage);
      input2.current.removeEventListener("click", getToPhonePage);
      input3.current.removeEventListener("click", getToPersonalDetailsPage);
      input4.current.removeEventListener("click", getToConfirmPage);
      input5.current.removeEventListener("click", getToSuccessPage);
      input6.current.removeEventListener("click", getToStarterPage);

      inputEmail.current.removeEventListener("input", handleChangeEmail);
    };
  }, [formData]);

  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
