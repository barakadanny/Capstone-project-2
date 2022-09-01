const comments = (commentList) => {
  let commentCount = 0;
  commentList.forEach((comment, index) => {
    commentCount += 1;
  });
  return commentCount;
};

export default comments;
