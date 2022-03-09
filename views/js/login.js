const loginForm = document.forms[0];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    loginForm.email.value.length > 0
    && loginForm.password.value.length >= 3
    && loginForm.password.value.length <= 33
  ) {
    const loginData = { email: loginForm.email.value, password: loginForm.password.value };
    fetchData('/login', 'POST', loginData)
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
  } else {
    alert('Password Should be at least 3 characters long');
  }
});
