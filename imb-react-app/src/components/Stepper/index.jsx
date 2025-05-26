/* eslint-disable no-undef */ // ? some function are defined globally in utils
const InitiateStepper = ({ ReactProp, stepperConfig }) => {
  const React = window.React || ReactProp;
  // console.log("React : ", React);

  // ----- STEPPER DATA TRANSFORM FUNCTIONS
  const generateRefData = (stepperConfig) => {
    const refData = [];
    const seen = new Set(); // To avoid duplicates

    stepperConfig.forEach((item) => {
      ["section", "prevButton", "nextButton"].forEach((key) => {
        const value = item[key];
        if (value && !seen.has(value)) {
          refData.push({
            refName: value.replace(/-/g, "_"),
            id: `#${value}`,
          });
          seen.add(value);
        }
      });
    });

    return refData;
  }

  const generateEventConfig = (stepperConfig) => {
    const eventConfig = [];

    stepperConfig.forEach((step, i) => {
      const currentRef = step.section.replace(/-/g, "_");
      // Handle nextButton
      if (step.nextButton && stepperConfig[i + 1]) {
        eventConfig.push({
          button: refs[`${step.nextButton.replace(/-/g, "_")}`],
          currentPage: refs[`${currentRef}`],
          targetPage:
            refs[`${stepperConfig[i + 1].section.replace(/-/g, "_")}`],
          index: stepperConfig[i + 1].stepperIndex,
          stepperId: step.stepperId
        });
      }

      // Handle prevButton
      if (step.prevButton && stepperConfig[i - 1]) {
        eventConfig.push({
          button: refs[`${step.prevButton.replace(/-/g, "_")}`],
          currentPage: refs[`${currentRef}`],
          targetPage:
            refs[`${stepperConfig[i - 1].section.replace(/-/g, "_")}`],
          index: stepperConfig[i - 1].stepperIndex,
          stepperId: step.stepperId
        });
      }
    });

    return eventConfig;
  }

  const generateFlatStepperConfig = (stepperArray) => {
    const flattenedStepper = stepperArray.flatMap((stepper) =>
      stepper.stepperPage.map((page) => ({
        ...page,
        stepperId: stepper.stepperId,
      }))
    );
    return flattenedStepper;
  };

  // ----- STEPPER COMPONENT FUNCTIONS
  const renderStepper = (stepperConfig, stepperId) => {
    const container = document.querySelector(`#${stepperId} .imb-stepper`);
    container.innerHTML = "";
  
    for (let i = 0; i < stepperConfig.length; i++) {
      const stepWrapper = document.createElement("div");
      stepWrapper.className = "imb-stepper-step";
  
      const stepBlock = document.createElement("div");
      stepBlock.className = "imb-stepper-step-block";
  
      stepWrapper.appendChild(stepBlock);
      container.appendChild(stepWrapper);
    }
  };

  const handleStepper = (countStep, stepperId) => {
    const stepperElements = document.querySelectorAll(
      `#${stepperId} .imb-stepper-step-block`
    );

    stepperElements.forEach((el) => {
      el.classList.remove(`imb-stepper-step-active`);
    });

    for (let i = 0; i < countStep; i++) {
      if (stepperElements[i]) {
        stepperElements[i].classList.add(
          `imb-stepper-step-active`
        );
      }
    }
  };

  const handleNavigation = (currentPage, targetPage, countStep, stepperId) => {
    const stepper = document.querySelector(`#${stepperId} .imb-stepper`);
    hideElement(currentPage);
    if (countStep === 0) {
      stepper.style.display = "none";
    } else {
      stepper.style.display = "flex";
      handleStepper(countStep, stepperId);
    }
    showElement(targetPage);
  };

  // ----- START INITIATE THE STEPPER
  stepperConfig.forEach((item) => {
    setTimeout(() => {
      renderStepper(item.stepperPage.filter((item) => item.stepperIndex > 0), item.stepperId);
    }, 100)
  })

  const flatStepperConfig = generateFlatStepperConfig(stepperConfig);
  const refData = generateRefData(flatStepperConfig);
  const refs = useElementRefs(refData, React);

  const eventConfig = generateEventConfig(flatStepperConfig);
  const eventData = eventConfig.map((item) => ({
    ref: item.button,
    event: "click",
    handler: () => {
      const currentPage = item.currentPage.current;
      const targetPage = item.targetPage.current;
      const countStep = item.index;

      handleNavigation(currentPage, targetPage, countStep, item.stepperId);
    },
  }));

  useEventListener(eventData, [eventData], React);

  console.log("stepperConfig : ", stepperConfig);
  console.log("---> flatStepperConfig", flatStepperConfig);
  console.log("---> generateRefData : ", refs);
  console.log("---> generateEventConfig : ", eventConfig);
  console.log("---> eventData : ", eventData);

  return null;
};
window.InitiateStepper = InitiateStepper;
