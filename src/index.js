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
            <div class="item-info">
              <h4>${item.name}</h4>
              <div class="like">
                  <p><i class="fa fa-heart-o" aria-hidden="true"></i> 5 <pan>Likes</pan></p>
              </div>
            </div>
        `;
      document.querySelector('.items-wrapper').appendChild(container);
    }
  });
});
