/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = ({ ReactProp, stepperConfig }) => {
  const React = window.React || ReactProp;

  InitiateStepper({ ReactProp: React, stepperConfig })

  // return no HTML code
  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
