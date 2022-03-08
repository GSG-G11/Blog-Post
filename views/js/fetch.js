const logoutBtn = document.querySelector('.logout');
console.log(logoutBtn, 'dadadada');
logoutBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/logout', {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'You are logged out') {
        window.location.href = '/';
      }
    })
    .catch(console.log);
});
