const getLikes = async () => {
  const getApiLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kfCZOrel9z6eHx4xDTE/likes';
  const response = await fetch(getApiLike);
  const allLikes = await response.json();
  // console.log(allLikes);
  allLikes.forEach((el) => {
    if (document.querySelector(`[data-id="${el.item_id}"]`)) {
      document.querySelector(`[data-id="${el.item_id}"]`).nextElementSibling.innerHTML = el.likes;
    }
  });
};
export default getLikes;