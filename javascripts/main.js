// main.js

document.addEventListener('DOMContentLoaded', function() {
  // 绑定滚动事件
  const throttledScroll = throttle(handleScroll, 100);
  window.addEventListener('scroll', throttledScroll);

  // 初始化 Info 图标交互
  toggleInfoPanel();
});
