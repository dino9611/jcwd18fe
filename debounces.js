const debounce = (func, delay, e) => {
  let debounceTimer;

  // console.log('dsadsa',e.target.value)
  return function (...args) {
    const context = this;

    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      func.apply(context, args);
    }, delay);
  };
};

const funci = (e) => {
  console.log(e);
};

debounce(funci, 1000, 1);
debounce(funci, 1000, 1);
debounce(funci, 1000, 3);
debounce(funci, 1000, 4);
