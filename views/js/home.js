const logoutBtn = document.querySelector('.logout');
const addBlogForm = document.forms[0];
const blogsContainer = document.querySelector('.blogs .container');
const welcome = document.querySelector('.welcome');

const deletepost = (id) =>
  fetch(`/delete-Post/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
const createDeleteBtn = (blogHeader) => {
  const deleteBlog = document.createElement('span');
  deleteBlog.className = 'delete';
  deleteBlog.textContent = 'Delete';
  blogHeader.appendChild(deleteBlog);
};
document.addEventListener('click', (e) => {
  if (e.target.matches('.delete')) {
    e.target.parentElement.parentElement.remove();
    const blogId = e.target.parentElement.parentElement.dataset.id;
    deletepost(blogId);
  }
});

const createBlog = (blogObj, endpoint, method) => {
  const blogCard = document.createElement('div');
  const blogHeader = document.createElement('div');
  const blogTitle = document.createElement('h3');
  const blogBody = document.createElement('div');
  const blogBlock = document.createElement('blockquote');
  const blogParagraph = document.createElement('q');
  const publishedBy = document.createElement('p');

  blogCard.setAttribute('data-id', blogObj.id);
  blogCard.className = 'blog';
  blogHeader.className = 'blog-header';
  blogTitle.className = 'title';
  blogBody.className = 'blog-body';
  publishedBy.className = 'by';

  fetchData(endpoint, method)
    .then((data) => {
      publishedBy.textContent = data.name;
      if (data.curUserId === blogObj.user_id) {
        createDeleteBtn(blogHeader);
      }
    })
    .catch(console.log);

  blogBlock.appendChild(blogParagraph);
  blogBody.appendChild(blogBlock);
  blogBody.appendChild(publishedBy);
  blogHeader.appendChild(blogTitle);
  blogCard.appendChild(blogHeader);
  blogCard.appendChild(blogBody);

  if (method === 'POST') createDeleteBtn(blogHeader);

  blogTitle.textContent = blogObj.title;
  blogParagraph.textContent = blogObj.content;
  blogsContainer.appendChild(blogCard);
};

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
      if (
        result &&
        result.message === 'Title length must be at least 3 characters long'
      ) {
        alert(result.message);
      } else {
        const blogData = result[0];
        createBlog(blogData, '/username', 'POST');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  fetchData('/username', 'POST')
    .then((data) => {
      welcome.textContent = `Welcome ${data.name}`;
    })
    .catch(console.log);
  fetchData('/all-blogs', 'GET')
    .then((data) => {
      data.forEach((blog) => {
        createBlog(blog, `/username?id=${blog.user_id}`, 'GET');
      });
    })
    .catch(console.log);
});
