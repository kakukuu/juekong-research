(function () {
    // 设置 favicon 的函数
    function setFavicon(icons) {
        // 删除现有 favicon
        document.querySelectorAll('link[rel="icon"]').forEach(icon => icon.remove());
        // 动态添加新的 favicon
        icons.forEach(({ href, type, sizes }) => {
            const link = document.createElement('link');
            link.rel = 'icon';
            link.href = href;
            link.type = type;
            if (sizes) link.sizes = sizes;
            document.head.appendChild(link);
        });
    }

    // 初始设置 favicon
    setFavicon([
        { href: 'assets/images/icon.svg', type: 'image/svg+xml' },
        { href: 'assets/images/icon.png', type: 'image/png', sizes: '64x64' }
    ]);

})();
