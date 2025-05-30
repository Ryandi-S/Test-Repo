/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

const InitiateComponent = ({ ReactProp, compConfig, updatePage }) => {
  const React = window.React || ReactProp;

  const [compState, setCompState] = React.useState(compConfig);
  const [compState2, setCompState2] = React.useState(); // dummy

  const validateInputsByConfig = (inputConfig) => {
    inputConfig.forEach(({ inputId }) => {
      const container = document.getElementById(inputId);
      // console.log("container", container);
      if (!container) {
        console.warn(`Container with ID "${inputId}" not found.`);
        return;
      }

      const input = container.querySelector("input[data-type]");
      if (!input) {
        console.warn(`No input with [data-type] inside "${inputId}".`);
        return;
      }

      const dataType = input.getAttribute("data-type");
      const value = input.value.trim();

      // console.log("data", dataType);

      // Remove existing error message
      const existingError = container.querySelector(".imb-input-error-message");
      if (existingError) {
        existingError.remove();
      }

      // Prepare error message
      let errorMessage = "";

      switch (dataType) {
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMessage = "* Please enter a valid email address";
          }
          break;
        case "number":
          if (isNaN(value) || value === "") {
            errorMessage = "* Please enter a valid number";
          }
          break;
        case "text":
          if (value === "") {
            errorMessage = "* This field is required";
          }
          break;
        default:
          errorMessage = "* Unknown input type";
      }

      if (errorMessage) {
        container.classList.add("input-error");

        const errorEl = document.createElement("div");
        errorEl.className = "imb-input-error-message";
        errorEl.textContent = errorMessage;

        container.appendChild(errorEl);
      } else {
        container.classList.remove("input-error");
      }
    });
  };

  React.useEffect(() => {
    window.compState = compState;
    window.inputFieldData = () => ({
      getData: () => compState,
      setData: (fn) => setCompState(fn),
    });
    window.inputFieldDataDummy = () => ({
      getData: () => compState2,
    });
  }, [compState, setCompState, compState2]);

  const refs = useElementRefs(compConfig, React, ["inputId"]);

  React.useEffect(() => {
    if (updatePage) {
      // tell parent page to update states
      updatePage(true);
    }
  }, [compState, compState2]);

  const eventData = compConfig.map((item) => ({
    ref: refs[`${item.inputId.replace(/-/g, "_")}`],
    event: "input",
    handler: (e) => {
      console.log("============");
      console.log("compState : ", compState);
      console.log("value / " + item.inputId + " : ", e.target.value);
      validateInputsByConfig(compState);
      setCompState2(e.target.value);
    },
  }));
  useEventListener(eventData, [eventData], React, "input");
  return null;
};

window.InitiateInput = InitiateComponent;
