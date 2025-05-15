const showElement = (element) => {
  // console.log("---> show : ",element);
  element.classList.add("imb-display-block");
  element.classList.remove("imb-display-none");
}
window.showElement = showElement;

const hideElement = (element) => {
  // console.log("---> hide : ",element);
  element.classList.remove("imb-display-block");
  element.classList.add("imb-display-none");
}
window.hideElement = hideElement;

const isValidEmail = (val) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log("---> isValidEmail : ", val, val && emailRegex.test(val));
  return (val && emailRegex.test(val))
}
window.isValidEmail = isValidEmail;

const isValidPhoneNumber = (val) => {
  const phoneRegex = /^[0-9]{10}$/;
  return (val && phoneRegex.test(val))
}
window.isValidPhoneNumber = isValidPhoneNumber;