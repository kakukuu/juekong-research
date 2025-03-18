document.addEventListener('DOMContentLoaded', () => {
  const stacks = document.querySelectorAll('.stack'); // 或者'.cardStack'，取决于你的 HTML 设置

  stacks.forEach(stack => {
    const cards = stack.querySelectorAll('.card.lecture.subcard a'); // 获取当前卡片堆中所有 a 标签
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
      if (!expanded) {
        e.preventDefault(); // 防止 a 标签跳转
        expandCards();
      } else {
        collapseCards();
      }
    });

    cards.forEach(link => {
      link.addEventListener('click', (e) => {
        if (!expanded) {
          e.preventDefault(); // 阻止未展开状态下 a 直接跳转
          expandCards();
        } else {
          e.stopPropagation(); // 阻止展开状态下触发 stack 收起
        }
      });
    });
  });
});
