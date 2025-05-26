/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = ({ ReactProp, stepperConfig }) => {
  console.log("HiddenShowPageFunction : ", stepperConfig);
  const React = window.React || ReactProp;

  stepperConfig.forEach((item) => {
    InitiateStepper({
      ReactProp: React,
      stepperConfig: item.stepperPage,
    });
  });

  // InitiateStepper({ ReactProp: React, stepperConfig })

  // return no HTML code
  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
