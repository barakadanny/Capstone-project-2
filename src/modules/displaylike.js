import postLike from './postlike.js';

const addEventToLike = () => {
  const getAllLike = document.querySelectorAll('.like i');
  getAllLike.forEach((item) => {
    item.addEventListener('click', function () {
      const stop = this.dataset.id;
      const getLike = document.querySelector(`[data-id="${this.dataset.id}"]`).nextElementSibling.innerHTML;
      document.querySelector(`[data-id="${this.dataset.id}"]`).nextElementSibling.innerHTML = Number(getLike) + 1;
      this.style.pointerEvents = 'none';
      setTimeout(() => {
        document.querySelector(`[data-id="${stop}"]`).style.pointerEvents = 'initial';
      }, 400);
      postLike(this.dataset.id);
    });
  });
};

export default addEventToLike;