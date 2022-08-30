import './style.css';

const gethumburger = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('.closeclass');
gethumburger.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('active');
});
getclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('active');
});