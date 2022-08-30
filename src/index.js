import './style.css';
import displayData from './modules/ui.js';
import getData from './modules/get.js';

const gethumburger = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('.closeclass');
gethumburger.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('active');
});
getclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('active');
});

const url = 'https://api.tvmaze.com/shows';
