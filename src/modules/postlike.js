const postLike = async (itemId) => {
  const likeObj = {
    item_id: itemId,
  };
  const getApiLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kfCZOrel9z6eHx4xDTE/likes';
  await fetch(getApiLike, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeObj),
  });
};
export default postLike;
