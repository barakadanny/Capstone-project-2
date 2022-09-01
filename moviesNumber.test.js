import movies from './__mocks__/moviesNumber.js';

const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
const array3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'o', 'p', 'q', 'r'];

describe('Number of movies test', () => {
  test('Number of movies', () => {
    expect(movies(array1)).toBe(8);
  });
  test('Number of movies', () => {
    expect(movies(array2)).toBe(13);
  });
  test('Number of movies', () => {
    expect(movies(array3)).toBe(16);
  });
});
