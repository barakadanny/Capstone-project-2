const comments = (commentList) => {
  let counter;
  commentList.forEach((comment, index) => {
    counter = index + 1;
  });
  return counter;
};

export default comments;
