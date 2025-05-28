/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
const InitiateInput = ({ ReactProp, inputConfig, updatePage }) => {
  const React = window.React || ReactProp;

  const [inputState, setInputState] = React.useState(inputConfig);

  React.useEffect(() => {
    window.inputState = inputState;
    window.inputData = () => ({
      getData: () => inputState,
      setData: (fn) => setInputState(fn),
    });
  }, [inputState, setInputState]);

  // const refs = useElementRefs(refData, React);

  React.useEffect(() => {
    console.log("component / Input / inputState : ", inputState);
    // inputState.forEach((item) => {
    //   renderStepper(
    //     item.stepperPage.filter((p) => p.stepperIndex > 0),
    //     item
    //   );
    // });
    if (updatePage){
      // tell parent page to update states
      updatePage(true);
    }
  }, [inputState]);

  // useEventListener(eventData, [eventData], React);

  return null;
};

window.InitiateInput = InitiateInput;
