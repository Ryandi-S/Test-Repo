const showElement = (element) => {
  element.classList.add("imb-display-block");
  element.classList.remove("imb-display-none");
}
window.showElement = showElement;

const hideElement = (element) => {
  element.classList.remove("imb-display-block");
  element.classList.add("imb-display-none");
}
window.hideElement = hideElement;