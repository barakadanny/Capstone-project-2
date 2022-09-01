const comments = (commentList) => {
  let commentCount = 0;
  commentList.forEach((comment, index) => {
    commentCount = index + 1;
  });
  return commentCount;
};

export default comments;
