const logoutBtn = document.querySelector('.logout');

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
