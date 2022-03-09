const addBlogForm = document.forms[0];
const blogsContainer = document.querySelector('.blogs .container');
addBlogForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    blogTitle: addBlogForm.blogTitle.value,
    blogContent: addBlogForm.blogContent.value,
  };
  if (data.blogTitle.length > 0 && data.blogContent.length > 0) {
    fetchData('/add-blog', 'POST', data).then((result) => {
      const blogData = result[0];

      const blogCard = document.createElement('div');
      const blogHeader = document.createElement('div');
      const blogTitle = document.createElement('h3');
      const deleteBlog = document.createElement('span');
      const blogBody = document.createElement('div');
      const blogBlock = document.createElement('blockquote');
      const blogParagraph = document.createElement('q');
      const publishedBy = document.createElement('p');

      blogCard.classList.add('blog');
      blogHeader.classList.add('blog-header');
      blogTitle.classList.add('title');
      deleteBlog.classList.add('delete');
      blogBody.classList.add('blog-body');
      publishedBy.classList.add('by');

      blogBlock.appendChild(blogParagraph);
      blogBody.appendChild(blogBlock);
      blogBody.appendChild(publishedBy);
      blogHeader.appendChild(blogTitle);
      blogHeader.appendChild(deleteBlog);
      blogCard.appendChild(blogHeader);
      blogCard.appendChild(blogBody);

      deleteBlog.textContent = 'Delete';
      blogTitle.textContent = blogData.titel;
      blogParagraph.textContent = blogData.content;
      blogsContainer.appendChild(blogCard);
    });
  }
});
