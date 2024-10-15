console.log("hi");
function isViewPort(elem) {
  const isViewPostVisble = elem.getBoundingClientRect();
  return (
    isViewPostVisble.top >= 0 &&
    isViewPostVisble.left >= 0 &&
    isViewPostVisble.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    isViewPostVisble.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
const getBlocks = function () {
  blocks.forEach((elem) => {
    if (isViewPort(elem)) {
      console.log(elem.innerText);
    }
  });
};
const blocks = document.querySelectorAll(".blocks");


window.addEventListener("scroll", debounce(getBlocks, 1000), false);
