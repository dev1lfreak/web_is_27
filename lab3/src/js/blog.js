const API_BASE = "https://ceramic-api.onrender.com";

function postBlogs(post) {
    return `
    <div class="article__card article__card article__card--${post.id}">
        <img src="${new URL(post.image, API_BASE)}" alt="${
        post.title
    }" class="article__card--image" loading="lazy">
        <div class="article__card--content">
            <div class="article__card--category">${post.title}</div>
            <button class="btn-default article__card--btn"><a href="#">read</a></button>
            <div class="article__card--text">${post.excerpt}</div>
        </div>
    </div>`;
}

async function fetchPosts() {
    const url = `${API_BASE}/api/posts`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    return res.json();
}

async function renderPosts() {
    const grid = document.querySelector(".articles__grid");
    grid.innerHTML = `<div class="loading">Loading…</div>`;

    try {
        const posts = await fetchPosts();

        if (posts.length === 0) {
            grid.innerHTML = `<div class="info">No posts found.</div>`;
        } else {
            grid.innerHTML = posts.map(postBlogs).join("");
        }
    } catch (err) {
        console.error(err);
        grid.innerHTML = `<div class="error">Failed to load posts.</div>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderPosts();
});