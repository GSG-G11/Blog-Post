const logoutBtn = document.querySelector('.logout');
const addBlogForm = document.forms[0];
const blogsContainer = document.querySelector('.blogs .container');

logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();

  fetchData('/logout', 'POST')
    .then((data) => {
      if (data.message === 'You are logged out') {
        window.location.href = '/';
      }
    })
    .catch(console.log);
});
addBlogForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    blogTitle: addBlogForm.blogTitle.value,
    blogContent: addBlogForm.blogContent.value,
  };
  if (data.blogTitle.length > 0 && data.blogContent.length > 0) {
    fetchData('/add-blog', 'POST', data).then((result) => {
      if (result && result.message === 'Title length must be at least 3 characters long') {
        alert(result.message);
      } else {
        const blogData = result[0];
        const blogCard = document.createElement('div');
        const blogHeader = document.createElement('div');
        const blogTitle = document.createElement('h3');
        const deleteBlog = document.createElement('span');
        const blogBody = document.createElement('div');
        const blogBlock = document.createElement('blockquote');
        const blogParagraph = document.createElement('q');
        const publishedBy = document.createElement('p');

        blogCard.className = 'blog';
        blogHeader.className = 'blog-header';
        blogTitle.className = 'title';
        deleteBlog.className = 'delete';
        blogBody.className = 'blog-body';
        publishedBy.className = 'by';

        fetchData('/username', 'POST')
          .then((data) => {
            publishedBy.textContent = data.name;
          })
          .catch(console.log);

        blogBlock.appendChild(blogParagraph);
        blogBody.appendChild(blogBlock);
        blogBody.appendChild(publishedBy);
        blogHeader.appendChild(blogTitle);
        blogHeader.appendChild(deleteBlog);
        blogCard.appendChild(blogHeader);
        blogCard.appendChild(blogBody);

        deleteBlog.textContent = 'Delete';
        blogTitle.textContent = blogData.title;
        blogParagraph.textContent = blogData.content;
        blogsContainer.appendChild(blogCard);
      }
    });
  }
});
