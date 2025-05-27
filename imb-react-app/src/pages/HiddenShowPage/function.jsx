/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = ({ ReactProp, stepperConfig, inputConfig }) => {
  const React = window.React || ReactProp;
  console.log("inputConfig : ", inputConfig)

  InitiateStepper({ ReactProp: React, stepperConfig })

  // return no HTML code
  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
