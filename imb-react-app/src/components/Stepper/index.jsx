/* eslint-disable no-undef */ // ? some function are defined globally in utils
const InitiateStepper = ({ ReactProp, stepperConfig }) => {
  const React = window.React || ReactProp;
  console.log("React : ",React)
  console.log("stepperConfig : ",stepperConfig)

  const handleStepper = (page, step) => {
    const stepper = page.querySelectorAll(".imb-stepper-step-block");
    //set i max to step
    for (let i = 0; i < step; i++) {
      stepper[i].classList.add("imb-stepper-step-active");
    }
  };
  window.handleStepper = handleStepper;

  const handleNavigation = (currentPage, targetPage, countStep) => {
    hideElement(currentPage);
    if (countStep > 0) {
      handleStepper(targetPage, countStep);
    }
    showElement(targetPage);
  };

  // hasil loop stepperConfig #1
  const refData = [
    { refName: "onboarding_section_0", id: "#onboarding-section-0" },
    { refName: "onboarding_section_1", id: "#onboarding-section-1" },
    { refName: "onboarding_0_button_signup", id: "#onboarding-0-button-signup" },
    { refName: "onboarding_1_button_back", id: "#onboarding-1-button-back" },
  ]

  const refs = useElementRefs(
    refData,
    React
  );

  // hasil loop stepperConfig #2
  // const eventConfig = [
  //   {
  //     button: refs[onboarding_0_button_signup],
  //     currentPage: refs[onboarding_section_0],
  //     targetPage: refs[onboarding_section_1],
  //     index: 1
  //   }
  // ]

  // hasil loop eventConfig
  const eventData = [
    { 
      ref: refs.onboarding_0_button_signup, 
      event: "click", 
      handler: () => {
        handleNavigation(refs.onboarding_section_0.current, refs.onboarding_section_1.current, 1);
      },
    },
    {
      ref: refs.onboarding_1_button_back,
      event: "click",
      handler: () => {
        handleNavigation(refs.onboarding_section_1.current, refs.onboarding_section_0.current, 0);
      },
    },
  ]

  useEventListener(
    eventData,
    [],
    React
  );

  return null;
}
window.InitiateStepper = InitiateStepper;