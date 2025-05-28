/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

// ? CHANGE comp_name WITH PROPER COMPONENT NAME

const InitiateComponent = ({ ReactProp, compConfig, updatePage }) => {
  const React = window.React || ReactProp;

  const [compState, setCompState] = React.useState(compConfig);

  React.useEffect(() => {
    window.compState = compState;
    window.comp_name_Data = () => ({
      getData: () => compState,
      setData: (fn) => setCompState(fn),
    });
  }, [compState, setCompState]);

  // const refs = useElementRefs(refData, React);

  React.useEffect(() => {
    console.log("component / comp_name / compState : ", compState);
    if (updatePage){
      // tell parent page to update states
      updatePage(true);
    }
  }, [compState]);

  // useEventListener(eventData, [eventData], React);

  return null;
};

window.Initiate_comp_name = InitiateComponent;
