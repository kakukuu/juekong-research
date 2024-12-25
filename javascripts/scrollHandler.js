// scrollHandler.js

/**
 * 处理滚动事件，动态调整页面元素的样式。
 * 此函数需要在页面加载时绑定到 `window.onscroll` 事件。
 * 外部引用：
 * 1. `document.querySelector` 选择页面上的特定 HTML 元素。
 * 2. 样式类 `.header`、`.header-title`、`.main-content` 需要在 CSS 文件中定义。
 */

function handleScroll() {
  // 获取当前页面的垂直滚动距离
  // `window.pageY` 用于大多数现代浏览器
  // `document.documentElement.scrollTop` 用于兼容旧版浏览器
  const scrollTop = window.pageY || document.documentElement.scrollTop;

  // 获取页面中的特定 HTML 元素
  const header = document.querySelector('.header'); // 页面顶部的页眉
  const headerTitle = document.querySelector('.header-title'); // 页眉中的标题
  const mainContent = document.querySelector('.main-content'); // 主内容区域

  // 设置动态字体大小
  // 根据窗口宽度调整标题字体的最大值和最小值
  let maxFontSize; // 最大字体大小
  let minFontSize; // 最小字体大小
  if (window.innerWidth < 768) { 
    // 如果窗口宽度小于 768 像素（小屏幕，如手机）
    maxFontSize = 36; // 较小的最大字体大小
    minFontSize = 18; // 较小的最小字体大小
  } else {
    // 如果窗口宽度大于或等于 768 像素（大屏幕，如电脑）
    maxFontSize = 48; // 较大的最大字体大小
    minFontSize = 24; // 较大的最小字体大小
  }

  // 根据滚动距离计算新的字体大小
  // 字体大小会随着页面滚动逐渐减小，但不会小于 `minFontSize`
  const newFontSize = Math.max(minFontSize, maxFontSize - scrollTop / 10);

  // 将计算后的字体大小应用到标题元素
  headerTitle.style.fontSize = newFontSize + 'px';

  // 调整页眉的背景颜色
  // 当滚动距离大于 100 像素时，改变页眉样式以增强视觉效果
  if (scrollTop > 100) {
    header.classList.add('scrolled'); // 添加样式类 `scrolled`，此类需在 CSS 文件中定义
    mainContent.style.backgroundColor = '#f0f0f0'; // 设置主内容区域的背景颜色
  } else {
    header.classList.remove('scrolled'); // 移除样式类 `scrolled`
    mainContent.style.backgroundColor = 'transparent'; // 恢复主内容区域的透明背景
  }
}
