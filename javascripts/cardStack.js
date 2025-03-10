//for test


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const stack = document.getElementById('cardStack');
    const cards = stack.querySelectorAll('.card.lecture.subcard');
    let expanded = false;
  
    function expandCards() {
      if (expanded) return;
      expanded = true;
      overlay.classList.add('active');
      cards.forEach(card => {
        card.classList.add('active');
      });
    }
  
    function collapseCards() {
      if (!expanded) return;
      expanded = false;
      overlay.classList.remove('active');
      cards.forEach(card => {
        card.classList.remove('active');
      });
    }
  
    if (stack && overlay) {
      stack.addEventListener('click', expandCards);
      overlay.addEventListener('click', collapseCards);
    } else {
      console.error('stack或overlay元素未找到');
    }
  
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (expanded) {
          e.stopPropagation(); // 防止事件冒泡到 overlay
          const href = card.getAttribute('data-href');
          if (href) window.open(href, '_blank');
        }
      });
    });
  });
  