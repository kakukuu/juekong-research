document.addEventListener("DOMContentLoaded", function () {
    // 获取按钮并绑定点击事件
    const copyButton = document.getElementById("copyButton");
    const svgElement = document.getElementById("svgContent"); // 确保SVG元素存在

    // 确保按钮和SVG存在后才添加事件监听
    if (copyButton && svgElement) {
        copyButton.addEventListener("click", function() {
            const svgHTML = svgElement.outerHTML;

            navigator.clipboard.writeText(svgHTML).then(() => {
                alert("SVG code has been copied");
            }).catch((err) => {
                console.error("Copy failed:", err);
            });
        });
    } else {
        console.error("Copy button or SVG element not found");
    }
});
