document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");

    if (copyButton) {
        copyButton.addEventListener("click", function () {
            const username = "kakukuu";
            const repo = "juekong-research";
            //const key = ""; // 如果需要身份验证，请取消注释并添加有效 Token

            let commitCount = 100; // 设置获取的提交数量

            const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

            fetch(apiUrl
                /*, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            } */)
                .then(response => {
                    if (response.status === 403) {
                        throw new Error("API 限制已达到，稍后再试");
                    }
                    if (!response.ok) {
                        throw new Error(`GitHub API 请求失败：${response.status}`);
                    }
                    return response.json();
                })
                .then(commits => {
                    const commitDetailsPromises = commits.slice(0, commitCount).map(commit => {
                        const commitUrl = commit.url;

                        return fetch(commitUrl
                            /*, {
                            headers: {
                                Authorization: `Bearer ${key}`
                            }
                        } */)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`提交详情请求失败：${response.status}`);
                                }
                                return response.json();
                            })
                            .then(commitDetails => {
                                const commitMessage = commitDetails.commit.message;
                                const commitDate = new Date(commitDetails.commit.author.date).toLocaleDateString();
                                const changedFiles = commitDetails.files?.length
                                    ? commitDetails.files.map(file => `⌈${file.filename.split('/').pop()}⌋`).join("; ")
                                    : "No files changed";

                                return `${commitDate} - ${commitMessage}: ${changedFiles}`;
                            });
                    });

                    return Promise.all(commitDetailsPromises);
                })
                .then(commitStrings => {
                    const output = commitStrings.join("\n");

                    navigator.clipboard.writeText(output).then(() => {
                        alert("提交记录已复制到剪切板！");
                    }).catch(err => {
                        console.error("复制失败:", err);
                        alert("复制失败，请检查剪切板权限！");
                    });
                })
                .catch(error => {
                    // 捕获所有错误并显示用户友好的提示
                    console.error("错误：", error.message);
                    alert(`操作失败：${error.message}`);
                });
        });
    } else {
        console.error("未找到复制按钮");
    }
});
