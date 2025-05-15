const showElement = (element) => {
  console.log("---> show : ",element);
  element.classList.add("imb-display-block");
  element.classList.remove("imb-display-none");
}
window.showElement = showElement;

const hideElement = (element) => {
  console.log("---> hide : ",element);
  element.classList.remove("imb-display-block");
  element.classList.add("imb-display-none");
}
window.hideElement = hideElement;