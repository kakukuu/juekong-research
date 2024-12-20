// scrollHandler.js

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  const headerTitle = document.querySelector('.header-title');
  const mainContent = document.querySelector('.main-content');
  
  // 调整标题字体大小
  if (window.innerWidth < 768) { // 小屏幕
    maxFontSize = 36; // 较小的最大字体
    minFontSize = 18; // 较小的最小字体
  } else { // 大屏幕
    maxFontSize = 48;
    minFontSize = 24;
  }
  const newFontSize = Math.max(minFontSize, maxFontSize - scrollTop / 10);
  headerTitle.style.fontSize = newFontSize + 'px';

  // 调整页眉背景色
  if (scrollTop > 100) {
      header.classList.add('scrolled');
      mainContent.style.backgroundColor = '#f0f0f0';
  } else {
      header.classList.remove('scrolled');
      mainContent.style.backgroundColor = 'transparent';
  }
}
