/* eslint-disable no-undef */ // ? some function are defined globally in utils
const InitiateStepper = ({ ReactProp, stepperConfig }) => {
  const React = window.React || ReactProp;

  // ----- STEPPER DATA TRANSFORM FUNCTIONS
  const generateFlatStepperConfig = (stepperArray) => {
    const flattenedStepper = stepperArray.flatMap((stepper) =>
      stepper.stepperPage.map((page) => ({
        ...page,
        stepperId: stepper.stepperId,
        clickable: stepper.clickable,
        nextDisabled: false,
        prevDisabled: false,
      }))
    );
    return flattenedStepper;
  };

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

  // ----- STEPPER COMPONENT FUNCTIONS
  const renderStepper = (stepperConfig, item) => {
    const stepperId = item.stepperId;
    const clickable = item.clickable;
    const currentPage = item.currentPage;
  
    const container = document.querySelector(`#${stepperId} .imb-stepper`);
    container.innerHTML = "";

    for (let i = 0; i < stepperConfig.length; i++) {
      const stepWrapper = document.createElement("div");
      stepWrapper.className = "imb-stepper-step";
  
      const stepBlock = document.createElement("div");
      stepBlock.className = `imb-stepper-step-block ${i <= item.currentIndex-1 ? "imb-stepper-step-active" : ""} ${clickable ? "imb-clickable" : ""}`;

      if (clickable){
        // stepBlock.setAttribute("data-target-id", stepperId);
        // stepBlock.setAttribute("data-target-index", stepperConfig[i].stepperIndex);
        stepBlock.onclick = () => {
          handleNavigation({
            currentPage: refs[currentPage.replace(/-/g, "_")],
            targetPage: refs[stepperConfig[i].section.replace(/-/g, "_")],
            index: stepperConfig[i].stepperIndex,
            stepperId: stepperId,
          }, true);
        };
      }
  
      stepWrapper.appendChild(stepBlock);
      container.appendChild(stepWrapper);
    }
  };

  // const handleStepper = (countStep, stepperId) => {
  //   const stepperElements = document.querySelectorAll(
  //     `#${stepperId} .imb-stepper-step-block`
  //   );

  //   stepperElements.forEach((el) => {
  //     el.classList.remove(`imb-stepper-step-active`);
  //   });

  //   for (let i = 0; i < countStep; i++) {
  //     if (stepperElements[i]) {
  //       stepperElements[i].classList.add(
  //         `imb-stepper-step-active`
  //       );
  //     }
  //   }
  // };

  const handleNavigation = (item, isValid) => {
    if (isValid){
      const currentPage = item.currentPage.current;
      const targetPage = item.targetPage.current;
      const countStep = item.index;
      const stepperId = item.stepperId;

      // update new current page & index into the state
      setStepperState(prevData =>
        prevData.map(stepper => {
          if (stepper.stepperId === stepperId) {
            return {
              ...stepper,
              currentPage: targetPage.id,
              currentIndex: countStep
            };
          }
          return stepper;
        })
      );
      // ------------------------

      const stepper = document.querySelector(`#${stepperId} .imb-stepper`);
      hideElement(currentPage);
      if (countStep === 0) {
        stepper.style.display = "none";
      } else {
        stepper.style.display = "flex";
        /* stepper active class handled in renderStepper(),
           trigerred via setStepperState() rerender */
        // handleStepper(countStep, stepperId);
      }
      showElement(targetPage);
    }
  };

  // ----- COMPONENT STATES
  const [stepperState, setStepperState] = React.useState(stepperConfig);
  React.useEffect(() => {
    window.stepperData = () => {
      return {
        getData: () => stepperState,
        setData: () => setStepperState
      }
    };
  }, [stepperState, setStepperState]);


  // ----- START INITIATE THE STEPPER
  stepperState.forEach((item) => {
    setTimeout(() => {
      renderStepper(item.stepperPage.filter((item) => item.stepperIndex > 0), item);
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
      handleNavigation(item, true);
    },
  }));

  useEventListener(eventData, [eventData], React);

  return null;
};
window.InitiateStepper = InitiateStepper;
