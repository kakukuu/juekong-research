// GitHub 用户名和仓库名称
const username = "kakukuu";
const repo = "juekong-research";
//const key = ""; // 如果需要身份验证，请取消注释并添加有效 Token
let commitCount = 2; 

// GitHub API 获取提交记录
const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

fetch(apiUrl
    /*, {
    headers: {
        Authorization: `Bearer ${key}`
    }
} */)
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API 请求失败：${response.status}`);
        }
        return response.json();
    })
    .then(commits => {
        const commitList = document.getElementById("commit-list");
        commitList.innerHTML = ""; // 清空加载中的内容

        // 获取最近 n 条提交记录
        commits.slice(0, commitCount).forEach(commit => {
            const commitUrl = commit.url; // 获取单次提交的详情 URL

            fetch(commitUrl
                /*, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            } */)
                .then(response => response.json())
                .then(commitDetails => {
                    const listItem = document.createElement("li");

                    // 获取提交信息
                    const commitMessage = commitDetails.commit.message;
                    const commitDate = new Date(commitDetails.commit.author.date).toLocaleDateString();

                    // 获取改动的文件
                    const changedFiles = commitDetails.files?.length
                        ? commitDetails.files.map(file => `⌈${file.filename.split('/').pop()}⌋`).join("; ")
                        : "No files changed";

                    // 构建列表项
                    listItem.innerHTML = `
                        <p> ${commitDate} ${commitMessage}:  ${changedFiles}</p>`;
                    commitList.appendChild(listItem);
                })
                .catch(error => {
                    console.error("获取提交详情出错：", error);
                    commitList.innerHTML += `<li>Failed to load commit details: ${commit.url}</li>`;
                });
        });
    })
    .catch(error => {
        console.error("错误：", error);
        document.getElementById("commit-list").textContent = "No updates available";
    });
