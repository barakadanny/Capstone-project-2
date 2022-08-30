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

getData().then((value) => {
  value.forEach((item, index) => {
    if (index < 6) {
      const container = document.createElement('div');
      container.classList.add('item');
      container.innerHTML = `
            <div class="image-wrapper">
                <img src="${item.image.original}" alt="${item.name}">
            </div>
            <h4>${item.name}</h4>
            <div class="like">
                <img src="img/like.svg" alt=""><span class="like-qty">4</span><span>likes</span>
            </div>
        `;
      document.querySelector('.items-wrapper').appendChild(container);
    }
  });
});
