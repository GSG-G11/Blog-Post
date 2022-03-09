const submit = document.querySelector('#submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  // eslint-disable-next-line no-undef
  fetchData('/register', 'POST', data)
    .then((data) => {
      if (data && data.message === 'done') {
        window.location.href = '/home';
      } else if (data.message === 'Your email already exists.') {
        alert(data.message);
      }
    }).catch(console.log);
});
