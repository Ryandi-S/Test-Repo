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

  function generateRefData(stepperConfig) {
    const refData = [];
    const seen = new Set(); // To avoid duplicates
  
    stepperConfig.forEach(item => {
      ['section', 'prevButton', 'nextButton'].forEach(key => {
        const value = item[key];
        if (value && !seen.has(value)) {
          refData.push({
            refName: value.replace(/-/g, '_'),
            id: `#${value}`
          });
          seen.add(value);
        }
      });
    });
  
    return refData;
  }

  function generateEventConfig(stepperConfig) {
    const eventConfig = [];
  
    stepperConfig.forEach((step, i) => {
      const currentRef = step.section.replace(/-/g, '_');
  
      // Handle nextButton
      if (step.nextButton && stepperConfig[i + 1]) {
        eventConfig.push({
          button: `refs[${step.nextButton.replace(/-/g, '_')}]`,
          currentPage: `refs[${currentRef}]`,
          targetPage: `refs[${stepperConfig[i + 1].section.replace(/-/g, '_')}]`,
          index: stepperConfig[i + 1].stepperIndex
        });
      }
  
      // Handle prevButton
      if (step.prevButton && stepperConfig[i - 1]) {
        eventConfig.push({
          button: `refs[${step.prevButton.replace(/-/g, '_')}]`,
          currentPage: `refs[${currentRef}]`,
          targetPage: `refs[${stepperConfig[i - 1].section.replace(/-/g, '_')}]`,
          index: stepperConfig[i - 1].stepperIndex
        });
      }
    });
  
    return eventConfig;
  }

  // hasil loop stepperConfig #1
  const refData = generateRefData(stepperConfig);

  const refs = useElementRefs(
    refData,
    React
  );

  // hasil loop stepperConfig #2
  const eventConfig = generateEventConfig(stepperConfig);

  console.log("---> generateRefData : ", refData);
  console.log("---> generateEventConfig : ", eventConfig);

  // hasil loop eventConfig
  const eventData = [
    // { 
    //   ref: refs.onboarding_0_button_signup, 
    //   event: "click", 
    //   handler: () => {
    //     handleNavigation(refs.onboarding_section_0.current, refs.onboarding_section_1.current, 1);
    //   },
    // },
    // {
    //   ref: refs.onboarding_1_button_back,
    //   event: "click",
    //   handler: () => {
    //     handleNavigation(refs.onboarding_section_1.current, refs.onboarding_section_0.current, 0);
    //   },
    // },
  ]

  useEventListener(
    eventData,
    [],
    React
  );

  return null;
}
window.InitiateStepper = InitiateStepper;