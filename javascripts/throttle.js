// throttle.js

function throttle(func, delay) {
  let lastTime = 0;
  return function() {
      const now = Date.now();
      if (now - lastTime >= delay) {
          func.apply(this, arguments);
          lastTime = now;
      }
  };
}
