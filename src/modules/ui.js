const displayData = (data) => {
  const list = document.querySelector('.items-wrapper');

  data.foreach((item) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
            <div class="item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h4>${item.name}</h4>
            <div class="like">
                <img src="img/like.svg" alt=""><span class="like-qty">4</span><span>likes</span>
            </div>
        `;
    list.appendChild(item);
  });
};

export default displayData;
