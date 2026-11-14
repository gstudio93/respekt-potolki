const button = document.querySelector('.menu');
const nav = document.querySelector('#nav');
button.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню'); button.textContent = open ? '×' : '☰'; });
nav.addEventListener('click', event => { if (event.target.closest('a')) { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Открыть меню'); button.textContent = '☰'; } });

