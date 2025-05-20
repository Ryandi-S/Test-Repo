/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = (ReactProp) => {
  const React = window.React || ReactProp;

  // tes manggil fungsi dari module
  moduleFunction();

  // page elements
  const refs = useElementRefs(
    [
      { refName: "starterPage", id: "#onboarding-section-0" },
      { refName: "emailPage", id: "#onboarding-section-1" },
      { refName: "phonePage", id: "#onboarding-section-2" },
      { refName: "personalDetailsPage", id: "#onboarding-section-3" },
      { refName: "confirmPage", id: "#onboarding-section-4" },
      { refName: "successPage", id: "#onboarding-section-5" },
      { refName: "input", id: "#onboarding-0-button-signup" },
      { refName: "input2", id: "#onboarding-1-button-next" },
      { refName: "input3", id: "#onboarding-2-button-next" },
      { refName: "input4", id: "#onboarding-3-button-next" },
      { refName: "input5", id: "#onboarding-4-button-next" },
      { refName: "input6", id: "#onboarding-success-button-begin" },
      { refName: "inputEmail", id: "#onboarding-input-email input" },
      {
        refName: "inputEmailErrMsg",
        id: "#onboarding-input-email .imb-input-error-message",
      },
      { refName: "inputPhone", id: "#onboarding-input-phone input" },
      {
        refName: "inputPhoneErrMsg",
        id: "#onboarding-input-phone .imb-input-error-message",
      },
      {
        refName: "backButtonOnboarding1",
        id: "#onboarding-1-button-back",
      },
      {
        refName: "backButtonOnboarding2",
        id: "#onboarding-2-button-back",
      },
      {
        refName: "backButtonOnboarding3",
        id: "#onboarding-3-button-back",
      },
      {
        refName: "backButtonOnboarding4",
        id: "#onboarding-4-button-back",
      },
    ],
    React
  );

  const onBackButtonPrev1 = (current, target) => {
    console.log("---> current : ", current)
    console.log("---> target : ", target)
    hideElement(refs.emailPage.current);
    showElement(refs.starterPage.current);
  };

  const onBackButtonPrev2 = () => {
    hideElement(refs.phonePage.current);
    showElement(refs.emailPage.current);
  };

  // page states
  const [isValidated, setIsValidated] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(
    refs.starterPage.current
  );
  console.log("currentPage", currentPage);
  const [formData, setFormData] = React.useState({
    email: "",
    phone: "",
    firstName: "",
    middleName: "",
    lastName: "",
  });

  // page functions
  const handleStepper = (page, step) => {
    console.log("handleStepper", page, step);
    const stepper = page.querySelectorAll(".imb-stepper-step-block");
    //set i max to step
    for (let i = 0; i < step; i++) {
      stepper[i].classList.add("imb-stepper-step-active");
    }
  };

  const getToEmailPage = () => {
    hideElement(refs.starterPage.current);
    showElement(refs.emailPage.current);
  };
  const getToPhonePage = () => {
    if (isValidEmail(formData.email)) {
      setIsValidated(false);
      hideElement(refs.emailPage.current);
      handleStepper(refs.phonePage.current, 2);
      showElement(refs.phonePage.current);
      return;
    }
    setIsValidated(true);
    return false;
  };

  const getToPersonalDetailsPage = () => {
    const phoneValue = refs.inputPhone.current.value.trim();

    if (!phoneValue) {
      refs.inputPhoneErrMsg.current.innerHTML = "Phone number is required";
      showElement(refs.inputPhoneErrMsg.current);
      return false;
    }

    if (!isValidPhoneNumber(phoneValue)) {
      console.log("Invalid phone number 1");
      refs.inputPhoneErrMsg.current.innerHTML = "Invalid phone number";
      showElement(refs.inputPhoneErrMsg.current);
      return false;
    }

    hideElement(refs.inputPhoneErrMsg.current);
    hideElement(refs.phonePage.current);
    handleStepper(refs.personalDetailsPage.current, 3);
    showElement(refs.personalDetailsPage.current);
  };

  const handleChangePhone = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const getToConfirmPage = () => {
    const firstName = refs.personalDetailsPage.current.querySelector(
      "#onboarding-input-firstname"
    );
    const middleName = refs.personalDetailsPage.current.querySelector(
      "#onboarding-input-middlename"
    );
    const lastName = refs.personalDetailsPage.current.querySelector(
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
      hideElement(refs.personalDetailsPage.current);
      // handleStepper(refs.confirmPage.current, 4);
      setCurrentPage("confirmPage");
      return showElement(refs.confirmPage.current);
    }
  };
  const getToSuccessPage = () => {
    hideElement(refs.confirmPage.current);
    showElement(refs.successPage.current);
  };

  const getToStarterPage = () => {
    hideElement(refs.successPage.current);
    showElement(refs.starterPage.current);
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
      refs.inputEmailErrMsg.current.innerHTML = "Email field is required";
      showElement(refs.inputEmailErrMsg.current);
    } else if (isValidated && !isValidEmail(formData.email)) {
      refs.inputEmailErrMsg.current.innerHTML = "Invalid email address";
      showElement(refs.inputEmailErrMsg.current);
    } else {
      hideElement(refs.inputEmailErrMsg.current);
    }
  }, [formData.email, isValidated]);

  React.useEffect(() => {
    // validate the phone step
    if (isValidated && !formData.phone) {
      refs.inputPhoneErrMsg.current.innerHTML =
        "Phone number field is required";
      showElement(refs.inputPhoneErrMsg.current);
    } else if (isValidated && isValidPhoneNumber(formData.phone)) {
      refs.inputPhoneErrMsg.current.innerHTML = "Invalid phone number";
      showElement(refs.inputPhoneErrMsg.current);
    } else {
      hideElement(refs.inputPhoneErrMsg.current);
    }
  }, [formData.phone, isValidated]);

  // attach events
  useEventListener(
    [
      { ref: refs.input, event: "click", handler: getToEmailPage },
      { ref: refs.input2, event: "click", handler: getToPhonePage },
      { ref: refs.input3, event: "click", handler: getToPersonalDetailsPage },
      { ref: refs.input4, event: "click", handler: getToConfirmPage },
      { ref: refs.input5, event: "click", handler: getToSuccessPage },
      { ref: refs.input6, event: "click", handler: getToStarterPage },
      { ref: refs.inputEmail, event: "input", handler: handleChangeEmail },
      { ref: refs.inputPhone, event: "input", handler: handleChangePhone },
      {
        ref: refs.backButtonOnboarding1,
        event: "click",
        handler: () => { onBackButtonPrev1(1, 0) },
      },
      {
        ref: refs.backButtonOnboarding2,
        event: "click",
        handler: onBackButtonPrev2,
      },
    ],
    [formData],
    React
  );

  // return no HTML code
  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
