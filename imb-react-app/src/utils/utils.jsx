const useElementRefs = (configs, ReactProp) => {
  const refs = ReactProp.useMemo(() => {
    const refObj = {};
    configs.forEach(({ refName }) => {
      refObj[refName] = ReactProp.createRef();
    });
    return refObj;
  }, []);

  ReactProp.useEffect(() => {
    configs.forEach(({ refName, id }) => {
      const el = document.querySelector(id);
      refs[refName].current = el;
    });
  }, []);

  return refs;
};
window.useElementRefs = useElementRefs;

const useEventListener = (config = [], dependency = [], ReactProp) => {
  return ReactProp.useEffect(() => {
    config.forEach(({ ref, event, handler }) => {
      console.log("useEventListener test : ", ref);
      if (ref.current) ref.current.addEventListener(event, handler);
    });
    // Clean up to prevent memory leaks
    return () => {
      config.forEach(({ ref, event, handler }) => {
        ref.current.removeEventListener(event, handler);
      });
    };
  }, dependency);
};
window.useEventListener = useEventListener;

const showElement = (element) => {
  // console.log("---> show : ",element);
  element.classList.add("imb-display-block");
  element.classList.remove("imb-display-none");
};
window.showElement = showElement;

const hideElement = (element) => {
  // console.log("---> hide : ",element);
  element.classList.remove("imb-display-block");
  element.classList.add("imb-display-none");
};
window.hideElement = hideElement;

const isValidEmail = (val) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    val !== "" && val !== undefined && val !== null && emailRegex.test(val)
  );
};
window.isValidEmail = isValidEmail;

const isValidPhoneNumber = (val) => {
  const phoneRegex = /^[0-9]{10}$/;
  return val && phoneRegex.test(val);
};
window.isValidPhoneNumber = isValidPhoneNumber;
