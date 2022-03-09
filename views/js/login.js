const loginForm = document.forms[0];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    loginForm.email.value.length > 0
    && loginForm.password.value.length >= 3
    && loginForm.password.value.length <= 33
  ) {
    const data = { email: loginForm.email.value, password: loginForm.password.value };
    fetchData('/login', 'POST', data)
      .then((data) => {
        console.log(data);
        if (!data.name) {
          alert(data.message);
        } else {
          window.location.href = '/home';
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
});
