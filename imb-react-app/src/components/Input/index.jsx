/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

const InitiateComponent = ({ ReactProp, compConfig, updatePage }) => {
  const React = window.React || ReactProp;

  const [compState, setCompState] = React.useState(compConfig);
  const [compState2, setCompState2] = React.useState(); // dummy

  React.useEffect(() => {
    window.compState = compState;
    window.inputFieldData = () => ({
      getData: () => compState,
      setData: (fn) => setCompState(fn),
    });
    window.inputFieldDataDummy = () => ({
      getData: () => compState2,
    });
  }, [compState, setCompState, compState2]);

  const refs = useElementRefs(compConfig, React, ["inputId"]);

  React.useEffect(() => {
    if (updatePage){
      // tell parent page to update states
      updatePage(true);
    }
  }, [compState, compState2]);

  const eventData = compConfig.map((item) => ({
    ref: refs[`${item.inputId.replace(/-/g, "_")}`],
    event: "input",
    handler: (e) => {
      console.log("============")
      console.log("compState : ", compState)
      console.log("value / "+item.inputId+" : ", e.target.value)
      setCompState2(e.target.value);
    },
  }));
  useEventListener(eventData, [eventData], React, "input");

  return null;
};

window.InitiateInput = InitiateComponent;
