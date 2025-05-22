import React from "react";

// page functions
const handleStepper = (page, step) => {
  const stepper = page.querySelectorAll(".imb-stepper-step-block");
  //set i max to step
  for (let i = 0; i < step; i++) {
    stepper[i].classList.add("imb-stepper-step-active");
  }
};

window.handleStepper = handleStepper;

// export default handleStepper;
