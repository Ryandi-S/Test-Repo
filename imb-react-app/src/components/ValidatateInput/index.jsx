const validateInputsByConfig = (inputConfig) => {
  inputConfig.forEach(({ inputId }) => {
    const container = document.getElementById(inputId);
    console.log("container", container);
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

    console.log("data", dataType);

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

window.validateInputsByConfig = validateInputsByConfig;
