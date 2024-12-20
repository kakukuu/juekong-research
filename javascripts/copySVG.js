document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");

    if (copyButton) {
        copyButton.addEventListener("click", function() {
            // 获取所有的 SVG 元素
            const svgElements = document.querySelectorAll("svg");
            let svgHTML = "";

            svgElements.forEach(function(svgElement) {
                svgHTML += svgElement.outerHTML + "\n";
            });

            navigator.clipboard.writeText(svgHTML).then(() => {
                alert("所有 SVG 代码已复制");
            }).catch((err) => {
                console.error("复制失败:", err);
            });
        });
    } else {
        console.error("未找到复制按钮");
    }
});
