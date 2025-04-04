function checkVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        const videoPosition = video.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (videoPosition < screenPosition) {
            video.classList.add('fade-in');
        } else {
            video.classList.remove('fade-in');
        }
    });
}

window.addEventListener('scroll', checkVideos);
window.addEventListener('load', checkVideos);

document.addEventListener('DOMContentLoaded', function() {
    const askButton = document.querySelector('.btnlogin-popup');
    if (askButton) {
        askButton.addEventListener('click', function() {
            alert("Ask button clicked! Implement your functionality.");
        });
    }
});

function addNewPost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const postsContainer = document.getElementById('forumPosts');

    if (title && content) {
        const newPost = document.createElement('div');
        newPost.classList.add('forum-post');
        const now = new Date();
        const timestamp = now.toLocaleString();

        newPost.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <p>Posted by: User, ${timestamp}</p>
        `;
        postsContainer.prepend(newPost);
        document.getElementById('postTitle').value = "";
        document.getElementById('postContent').value = "";
    } else {
        alert("Please enter both title and content.");
    }
}