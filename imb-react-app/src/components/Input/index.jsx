/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
const InitiateComponent = ({ ReactProp, compConfig, updatePage }) => {
  const React = window.React || ReactProp;

  const [compState, setCompState] = React.useState(compConfig);

  React.useEffect(() => {
    window.compState = compState;
    window.inputData = () => ({
      getData: () => compState,
      setData: (fn) => setCompState(fn),
    });
  }, [compState, setCompState]);

  // const refs = useElementRefs(refData, React);

  React.useEffect(() => {
    console.log("component / Input / compState : ", compState);
    // compState.forEach((item) => {
    //   renderStepper(
    //     item.stepperPage.filter((p) => p.stepperIndex > 0),
    //     item
    //   );
    // });
    if (updatePage){
      // tell parent page to update states
      updatePage(true);
    }
  }, [compState]);

  // useEventListener(eventData, [eventData], React);

  return null;
};

window.InitiateInput = InitiateComponent;
