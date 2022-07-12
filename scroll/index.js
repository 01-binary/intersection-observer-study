function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const addEventToEl = (elList) => {
  document.addEventListener("scroll", () => {
    elList.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("tada");
      } else {
        el.classList.remove("tada");
      }
    });
  });
};
const boxElList = document.querySelectorAll(".box");
addEventToEl(boxElList);
