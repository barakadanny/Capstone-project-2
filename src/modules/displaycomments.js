const displayComments = async (id) => {
  const itemId = id;
  const getApiComment = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uvTXiMX6FVr6xHgADoVW/comments?item_id=${itemId}`;
  const response = await fetch(getApiComment);
  if (response.ok) {
    const allComments = await response.json();
    document.querySelector('.comments .qty').innerHTML = allComments.length;
    let htmlString = '';
    allComments.forEach((el) => {
      htmlString += `
                <li><span>${el.creation_date}</span>&nbsp;<span>${el.username}:</span>&nbsp<span>${el.comment}</span></li>
        `;
    });
    document.querySelector('.popup ul').innerHTML = htmlString;
  }
  document.querySelector('.form input').value = '';
  document.querySelector('.form textarea').value = '';
};
export default displayComments;