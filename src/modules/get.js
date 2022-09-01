const getData = async () => {
  let arr = [];
  const url = 'https://api.tvmaze.com/shows?page=1';
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      arr = data;
    });
  return arr;
};

export default getData;
