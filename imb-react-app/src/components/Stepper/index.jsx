/* eslint-disable no-undef */ // ? some function are defined globally in utils
const InitiateStepper = ({ ReactProp, stepperConfig }) => {
  const React = window.React || ReactProp;
  console.log("React : ", React);
  console.log("stepperConfig : ", stepperConfig);

  // convert steper convert
  const stepperConvert = (stepperArray) => {
    const flattenedStepper = stepperArray.flatMap((stepper) =>
      stepper.stepperPage.map((page) => ({
        ...page,
        stepperId: stepper.stepperId,
      }))
    );
    console.log("stepperConvert", flattenedStepper);
    return flattenedStepper;
  };

  const steperConvert = stepperConvert(stepperConfig);

  const handleStepper = (step, countStep, stepperId) => {
    renderStepper(step);

    const stepperElements = document.querySelectorAll(
      `#${stepperId} .imb-stepper-step-block`
    );

    stepperElements.forEach((el) => {
      el.classList.remove(`#${stepperId} imb-stepper-step-active`);
    });

    for (let i = 0; i < countStep; i++) {
      if (stepperElements[i]) {
        stepperElements[i].classList.add(
          `#${stepperId} imb-stepper-step-active`
        );
      }
    }
  };

  window.handleStepper = handleStepper;

  const handleNavigation = (currentPage, targetPage, countStep, stepperId) => {
    const stepper = document.querySelector(".imb-stepper");
    hideElement(currentPage);
    if (countStep === 0) {
      stepper.style.display = "none";
    } else {
      stepper.style.display = "flex";
      const filtered = steperConvert.filter((item) => item.stepperIndex > 0);
      handleStepper(filtered.length, countStep, stepperId);
    }
    showElement(targetPage);
  };

  function generateRefData(stepperConfig) {
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

  function generateEventConfig(stepperConfig) {
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
        });
      }
    });

    return eventConfig;
  }

  // hasil loop stepperConfig #1
  const refData = generateRefData(steperConvert);

  const refs = useElementRefs(refData, React);

  // hasil loop stepperConfig #2
  const eventConfig = generateEventConfig(steperConvert);

  console.log("---> generateRefData : ", refs);
  console.log("---> generateEventConfig : ", eventConfig);

  // hasil loop eventConfig
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

  console.log("---> eventData : ", eventData);

  useEventListener(eventData, [eventData], React);

  return null;
};
window.InitiateStepper = InitiateStepper;
