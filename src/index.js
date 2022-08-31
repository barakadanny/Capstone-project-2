import './style.css';
import getData from './modules/get.js';
import getLikes from './modules/getlikes';
import addEventToCommentBtn from './modules/popup';
import addEventToLike from './modules/displaylike';

const gethumburger = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('.closeclass');
gethumburger.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('menu');
});
getclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('menu');
});

addEventToCommentBtn();

addEventToLike();

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
                  <p><i data-id="${item.id}" class="fa fa-heart-o" aria-hidden="true"></i> <span class="qty">0</span> <span>Likes</span></p>
              </div>
            </div>
            <button data-idBtn="${item.id}" class="commentBtn" type="submit">Comments</button>
            <div data-descr="${item.summary}"></div>
        `;
      document.querySelector('.items-wrapper').appendChild(container);
    }
  });
  addEventToCommentBtn();
  addEventToLike();
  getLikes();
});
