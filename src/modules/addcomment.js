import displayComments from './displaycomments';

const addComment1 = async (comObj, itemId) => {
  const getApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kfCZOrel9z6eHx4xDTE/comments';
  await fetch(getApiComment, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comObj),
  });
  displayComments(itemId);
};

const addComment = (itemId) => {
  const getAddBtn = document.querySelector('.form');
  getAddBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const getName = document.querySelector('.form input').value;
    const getMess = document.querySelector('.form textarea').value;
    const comObj = {
      item_id: itemId,
      username: getName,
      comment: getMess,
    };
    addComment1(comObj, itemId);
    e.stopImmediatePropagation();
  });
};

export default addComment;
