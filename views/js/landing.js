const sideSection = document.querySelector('.side-section');
const controls = document.querySelector('.controls');

document.addEventListener('DOMContentLoaded', () => {
  fetchData('/username', 'POST')
    .then((data) => {
      controls.remove();
      const welcome = document.createElement('p');
      welcome.className = 'welcome';
      welcome.textContent = `Welcome ${data.name}`;
      sideSection.append(welcome);
    })
    .catch(console.log);
});
