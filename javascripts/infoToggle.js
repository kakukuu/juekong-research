// infoToggle.js


function toggleInfoPanel() {
    const infoIcon = document.getElementById('infoIcon');
    const infoPanel = document.getElementById('infoPanel');
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
    const headerSignature = document.querySelector('.header-signature'); // 选择签名元素(仅对index生效)
    const lightIcon = new Image();
    lightIcon.src = 'assets/images/info-icon-light.svg';
    const darkIcon = new Image();
    darkIcon.src = 'assets/images/info-icon-dark.svg';

    infoIcon.addEventListener('click', function() {
        if (infoPanel.classList.contains('open')) {
            // 关闭面板
            infoPanel.classList.remove('open');
            header.classList.remove('expanded'); // 恢复 header 高度 （仅对page生效）
            infoIcon.src = lightIcon.src;
            headerSignature.classList.remove('open'); // 隐藏签名显示签名 (仅对index生效)
        } else {
            // 打开面板
            infoPanel.classList.add('open');
            header.classList.add('expanded'); // 增加 header 高度（仅对page生效）
            infoIcon.src = darkIcon.src;
            headerSignature.classList.add('open'); // 显示签名 (仅对index生效)
        }
    });
}
