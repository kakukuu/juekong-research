document.addEventListener('DOMContentLoaded', () => {
  const stack = document.getElementById('cardStack');
  const cards = stack.querySelectorAll('.card.lecture.subcard a'); // 获取所有 `a` 标签
  let expanded = false;

  function expandCards() {
    if (expanded) return;
    expanded = true;
    stack.classList.add('active');
    document.body.classList.add('no-scroll'); // 禁止滚动
  }

  function collapseCards() {
    if (!expanded) return;
    expanded = false;
    stack.classList.remove('active');
    document.body.classList.remove('no-scroll'); // 恢复滚动
  }

  stack.addEventListener('click', (e) => {
    // 如果 `stack` 处于收起状态，展开它
    if (!expanded) {
      e.preventDefault(); // 防止 `a` 标签跳转
      expandCards();
    } else {
      collapseCards();
    }
  });

  // **关于subcard中 `a` 点击的处理**
  cards.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (!expanded) {
        e.preventDefault(); // 在未展开状态下，阻止 `a` 直接跳转
        expandCards();
      } else {
        // 在展开状态下，允许 `a` 正常打开链接
        e.stopPropagation(); // 防止 `stack` 触发收起事件
      }
    });
  });
});
