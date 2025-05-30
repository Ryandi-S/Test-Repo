/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
const InitiateStepper = ({
  ReactProp,
  stepperConfig,
  inputConfig,
  updatePage,
}) => {
  const React = window.React || ReactProp;

  const [stepperState, setStepperState] = React.useState(stepperConfig);

  React.useEffect(() => {
    window.stepperData = () => ({
      getData: () => stepperState,
      setData: (fn) => setStepperState(fn),
    });
  }, [stepperState, setStepperState]);

  const generateFlatStepperConfig = (stepperArray) =>
    stepperArray.flatMap((stepper) =>
      stepper.stepperPage.map((page) => ({
        ...page,
        stepperId: stepper.stepperId,
        clickable: stepper.clickable,
        nextDisabled: false,
        prevDisabled: false,
      }))
    );

  const validateInputs = (stepperId, stepIndex, inputConfig) => {
    const inputsToCheck =
      inputConfig.filter(
        (i) => i.stepperId === stepperId && i.stepIndex === stepIndex
      ) || [];

    let isValid = true;

    inputsToCheck.forEach(({ inputId, type }) => {
      const inputEl = document.querySelector(`#${inputId} input`);
      const errorEl = document.querySelector(
        `#${inputId} .imb-input-error-message`
      );
      const value = inputEl.value.trim();

      if (!inputEl || !errorEl) return;

      if (!value) {
        errorEl.innerText = "* Field is required";
        showElement(errorEl);
        isValid = false;
      } else if (type === "email" && !isValidEmail(value)) {
        errorEl.innerText = "* Invalid email address";
        showElement(errorEl);
        isValid = false;
      } else if (type === "phone" && !isValidPhoneNumber(value)) {
        errorEl.innerText = "* Invalid phone number";
        showElement(errorEl);
        isValid = false;
      } else {
        hideElement(errorEl);
      }
    });

    return isValid;
  };

  const handleNavigation = (item, skipValidation = false) => {
    const stepperDataApi = window.stepperData();
    const stepperState = stepperDataApi.getData();

    const currentStep = stepperState
      .find((s) => s.stepperId === item.stepperId)
      .stepperPage.find((p) => p.section === item.currentPage.current.id);

    const currentStepIndex = currentStep.stepperIndex;
    const currentStepperId = item.stepperId;

    const isBack = item.button.current.id.includes("back");

    if (!isBack) {
      const isValid = validateInputs(
        currentStepperId,
        currentStepIndex,
        inputConfig
      );
      if (!isValid) return;
    }

    const currentPage = item.currentPage.current;
    const targetPage = item.targetPage.current;
    const countStep = item.index;
    const stepperId = item.stepperId;

    stepperDataApi.setData((prev) =>
      prev.map((s) =>
        s.stepperId === stepperId
          ? { ...s, currentPage: targetPage.id, currentIndex: countStep }
          : s
      )
    );

    const stepper = document.querySelector(`#${stepperId} .imb-stepper`);
    hideElement(currentPage);
    stepper.style.display = countStep === 0 ? "none" : "flex";
    showElement(targetPage);
  };

  const flatStepperConfig = generateFlatStepperConfig(stepperConfig);
  const refs = useElementRefs(flatStepperConfig, React, [
    "section",
    "prevButton",
    "nextButton",
  ]);

  const generateEventConfig = (stepperConfig) => {
    const eventConfig = [];

    stepperConfig.forEach((step, i) => {
      const currentRef = step.section.replace(/-/g, "_");

      if (step.nextButton && stepperConfig[i + 1]) {
        eventConfig.push({
          button: refs[`${step.nextButton.replace(/-/g, "_")}`],
          currentPage: refs[currentRef],
          targetPage:
            refs[`${stepperConfig[i + 1].section.replace(/-/g, "_")}`],
          index: stepperConfig[i + 1].stepperIndex,
          stepperId: step.stepperId,
        });
      }

      if (step.prevButton && stepperConfig[i - 1]) {
        eventConfig.push({
          button: refs[`${step.prevButton.replace(/-/g, "_")}`],
          currentPage: refs[currentRef],
          targetPage:
            refs[`${stepperConfig[i - 1].section.replace(/-/g, "_")}`],
          index: stepperConfig[i - 1].stepperIndex,
          stepperId: step.stepperId,
        });
      }
    });

    return eventConfig;
  };

  const renderStepper = (stepperPages, item) => {
    const { stepperId, clickable, currentPage, currentIndex } = item;
    const container = document.querySelector(`#${stepperId} .imb-stepper`);
    container.innerHTML = "";

    stepperPages.forEach((page) => {
      const stepWrapper = document.createElement("div");
      stepWrapper.className = "imb-stepper-step";

      const stepBlock = document.createElement("div");
      stepBlock.className = `imb-stepper-step-block ${
        page.stepperIndex <= currentIndex ? "imb-stepper-step-active" : ""
      } ${clickable ? "imb-clickable" : ""}`;

      if (clickable) {
        stepBlock.onclick = () => {
          const stepperDataApi = window.stepperData();
          const currentState = stepperDataApi
            .getData()
            .find((s) => s.stepperId === stepperId);

          const currentStep = currentState.stepperPage.find(
            (p) => p.section === currentPage
          );

          const currentStepIndex = currentStep.stepperIndex;

          if (page.stepperIndex > currentStepIndex) {
            const isValid = validateInputs(
              stepperId,
              currentStepIndex,
              inputConfig
            );
            if (!isValid) return;
          }

          handleNavigation(
            {
              currentPage: refs[currentPage.replace(/-/g, "_")],
              targetPage: refs[page.section.replace(/-/g, "_")],
              index: page.stepperIndex,
              stepperId,
            },
            true
          );
        };
      }

      stepWrapper.appendChild(stepBlock);
      container.appendChild(stepWrapper);
    });
  };

  React.useEffect(() => {
    console.log("component / Stepper / stepperState : ", stepperState);
    stepperState.forEach((item) => {
      renderStepper(
        item.stepperPage.filter((p) => p.stepperIndex > 0),
        item
      );
    });
    if (updatePage) {
      // tell parent page to update states
      updatePage(true);
    }
  }, [stepperState]);

  const eventConfig = generateEventConfig(flatStepperConfig);
  const eventData = eventConfig.map((item) => ({
    ref: item.button,
    event: "click",
    handler: () =>
      handleNavigation(item, handleNullable(item.button.id).includes("back")),
  }));

  useEventListener(eventData, [eventData], React);

  return null;
};

window.InitiateStepper = InitiateStepper;
