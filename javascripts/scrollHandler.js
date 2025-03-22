// scrollHandler.js

/**
 * 处理滚动事件，动态调整页面元素的样式。
 * 此函数需要在页面加载时绑定到 `window.onscroll` 事件。
 * 外部引用：
 * 1. `document.querySelector` 选择页面上的特定 HTML 元素。
 * 2. 样式类 `.header`、`.header-title`、`.main-content` 在 CSS 文件中定义。
 */

function handleScroll() {
  // 获取当前页面的垂直滚动距离
  // `window.pageY` 用于大多数现代浏览器
  // `document.documentElement.scrollTop` 用于兼容旧版浏览器
  const scrollTop = window.pageY || document.documentElement.scrollTop;

  // 获取页面中的特定 HTML 元素
  const header = document.querySelector('.header'); // 页面顶部的页眉
  const headerTitlePage = document.querySelector('.page-header-content .header-title'); // 页眉中的标题
  const headerTitleIndex = document.querySelector('.index-header-content .header-title'); // 页眉中的标题
  const mainContent = document.querySelector('.main-content'); // 主内容区域

  // 设置动态字体大小
  // 根据窗口宽度调整标题字体的最大值和最小值
  let maxFontSize; // 最大字体大小
  let minFontSize; // 最小字体大小
  if (window.innerWidth < 480) { 
    // 小屏幕时：例如最大字体比例为窗口宽度 10%，最小字体为 16px
    
    maxFontSize = Math.round(Math.min(window.innerWidth * 0.1, window.innerHeight * 0.1));
    minFontSize = 20;
  } else
  if (window.innerWidth < 768) {
    // 中等屏幕时：例如最大字体比例为窗口宽度 5%，最小字体为 20px
  maxFontSize = Math.round(Math.min(window.innerWidth * 0.05, window.innerHeight * 0.05));
    minFontSize = 22;
  }
  else {
    // 大屏幕时：例如最大字体比例为窗口宽度 5%，最小字体为 24px
  maxFontSize = Math.round(Math.min(window.innerWidth * 0.05, window.innerHeight * 0.05));
    minFontSize = 24;
  }

  // 根据滚动距离计算新的字体大小
  // 字体大小会随着页面滚动逐渐减小，但不会小于 `minFontSize`
  const newFontSize = Math.max(minFontSize, maxFontSize - scrollTop);
  const newFontSizeSlow = Math.max(minFontSize, maxFontSize - scrollTop/30);
  // 将计算后的字体大小应用到标题元素
  if (headerTitlePage) {
    headerTitlePage.style.fontSize = newFontSize + 'px';
  }
  if (headerTitleIndex) {
    headerTitleIndex.style.fontSize = newFontSizeSlow + 'px';
  }
}
