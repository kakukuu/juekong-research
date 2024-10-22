// scrollHandler.js

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  const headerTitle = document.querySelector('.header-title');
  const mainContent = document.querySelector('.main-content');
  const gradientOverlay = document.querySelector('.gradient-overlay');

  // 调整标题字体大小
  const maxFontSize = 48;
  const minFontSize = 24;
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

  // 移动渐变色罩
  gradientOverlay.style.transform = `translateY(${scrollTop * 0.5}px)`;
}
