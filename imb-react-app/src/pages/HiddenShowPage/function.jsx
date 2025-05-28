/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = ({ ReactProp, stepperConfig, inputConfig }) => {
  const React = window.React || ReactProp;

  InitiateInput({ ReactProp: React, inputConfig });
  InitiateStepper({ ReactProp: React, stepperConfig, inputConfig });

  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
