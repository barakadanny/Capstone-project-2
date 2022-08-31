import displayComments from './displaycomments.js';
import addComment from './addcomment.js';

const addEventToCommentBtn = () => {
  const getAllBtn = document.querySelectorAll('.commentBtn');
  getAllBtn.forEach((item) => {
    item.addEventListener('click', function () {
      document.querySelector('body').classList.add('active');
      const getItemId = this.getAttribute('data-idBtn');
      const getUrl = this.parentElement.firstElementChild.firstElementChild.getAttribute('src');
      document.querySelector('.popup-img-wrapper').style.backgroundImage = `url('${getUrl}')`;
      document.querySelector('.popup h3').innerHTML = this.parentElement.querySelector('h4').innerHTML;
      const rem = document.querySelector('.popup p');
      if (rem) { rem.remove(); }
      const html = this.parentElement.lastElementChild.getAttribute('data-descr');
      document.querySelector('.popup h3').insertAdjacentHTML('afterend', html);
      addComment(getItemId);
      displayComments(getItemId);
      document.querySelector('.closepopup').addEventListener('click', () => {
        document.querySelector('body').classList.remove('active');
      });
    });
  });
};

export default addEventToCommentBtn;