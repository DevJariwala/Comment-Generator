
function addGenerateCommentButton(post) {
    // Find the comment section
    const commentSection = post.querySelector(".feed-shared-social-action-bar");

    if (commentSection) {
        const button = document.createElement("button");
        button.innerText = "Generate Comment";
        button.style.backgroundColor = "#0073b1";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.padding = "5px 10px";
        button.style.marginLeft = "10px";
        button.style.cursor = "pointer";
        button.style.zIndex = "100";
        button.style.position = "relative";


        const dropdown = document.createElement("div");
        dropdown.style.display = "none";
        dropdown.style.position = "absolute";
        dropdown.style.backgroundColor = "#fff";
        dropdown.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        dropdown.style.borderRadius = "5px";
        dropdown.style.top = "100%";
        dropdown.style.left = "0";
        dropdown.style.zIndex = "101";

        const postContent = post.querySelector(".feed-shared-update-v2__description").innerText;
        let commentBtn = post.getElementsByClassName('comment-button')[0];
        

        const options = ["Funny", "Supportive", "Informative"];
        options.forEach(option => {
            const optionButton = document.createElement("button");
            optionButton.innerText = option;
            optionButton.style.backgroundColor = "#fff";
            optionButton.style.color = "#0073b1";
            optionButton.style.border = "none";
            optionButton.style.padding = "10px";
            optionButton.style.cursor = "pointer";
            optionButton.style.width = "100%";
            optionButton.style.textAlign = "left";


            optionButton.addEventListener("click", async () => {
                dropdown.style.display = "none";
                let commentSection = post.querySelector(".ql-editor");
                console.log("Comment section is ",commentSection);
                commentSection.innerHTML = `<p>Generating comment ... </p>`;

                let obj = {
                    content: postContent,
                    commentType: option
                };

                let comment;
                if (postContent) {
                    await fetch("your-backend-url", {
                        method: "POST",
                        body: JSON.stringify(obj),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    }).then((response) => response.json())
                        .then((json) => {
                            console.log("Json is ",json);
                            comment = json.comment;
                        });
                    commentSection.innerHTML = `<p>${comment}</p>`;
                } else {
                    console.log("Post content not found.");
                }
            });

            dropdown.appendChild(optionButton);
        });

        button.addEventListener("click", () => {
            commentBtn.click();
            dropdown.style.display = "block";
        });

        button.addEventListener("mouseleave", () => {
            dropdown.style.display = "none";
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.style.display = "none";
        });

        button.appendChild(dropdown);

        commentSection.appendChild(button);
    } else {
        console.log("Comment section not found.");
    }
}




    function addButtonsToPosts() {
        const posts = document.querySelectorAll(".feed-shared-update-v2");
        posts.forEach(post => {
            addGenerateCommentButton(post);
        });
    }
    
    addButtonsToPosts();
    
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches(".feed-shared-update-v2")) {
                    addGenerateCommentButton(node);
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
