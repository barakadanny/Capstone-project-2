import srcimport from '../assets/movielogo.png'; // link to image

const mainScript = () => {
  const gethumburger = document.querySelector('.humburger-wrapper');
  const getclose = document.querySelector('.closeclass');
  gethumburger.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menu');
  });
  getclose.addEventListener('click', () => {
    document.querySelector('body').classList.remove('menu');
  });

  const getimg = document.querySelector('.logo-wrapper img');
  getimg.src = srcimport;
};

export default mainScript;
