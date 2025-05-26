/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = ({ ReactProp, stepperConfig }) => {
  console.log("HiddenShowPageFunction : ", stepperConfig);
  const React = window.React || ReactProp;

  // stepperConfig.map((item) => {
  //   InitiateStepper({ ReactProp: React, stepperPage: item.stepperPage });
  // });

  InitiateStepper({ ReactProp: React, stepperConfig });

  // return no HTML code
  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
