/* eslint-disable no-undef */ // ? some function are defined globally in utils
const HiddenShowPageFunction = ({ ReactProp, stepperConfig, inputConfig }) => {
  const React = window.React || ReactProp;
  const [state, setState] = React.useState(false);

  InitiateInput({ ReactProp: React, compConfig: inputConfig, updatePage: setState });
  InitiateStepper({ ReactProp: React, stepperConfig, inputConfig, updatePage: setState });

  React.useEffect(() => {
    if (state === true){
      console.log("page / inputData : ", inputData().getData());
      // stepperData.setValidationPass();
      setState(false);
    }
  }, [state])

  return null;
};

window.HiddenShowPageFunction = HiddenShowPageFunction;
