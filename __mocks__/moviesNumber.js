const movies = (moviesArray) => {
  let length = 0;

  moviesArray.forEach((movie, index) => {
    length = index + 1;
  });
  return length;
};

export default movies;
