function Blog({ id, title, image }) {
  return `
        <div class="blog" data-id="${id}">
            <div class="blog__image">
                <img src="${image}" alt="${title}" />
            </div>
            <div class="blog__title">
                <a href="Qatar.html">${title}</a>
            </div>
        </div>
    `;
}

export default Blog;
