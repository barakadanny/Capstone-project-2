import movies from './__mocks__/moviesNumber.js';

const moviesArray = [
  'Trailer',
  'Welcome to america',
  'Happy',
  'Bootcamp',
  'Africa',
  'Microverse',
  'Story',
  'Coding',
];

describe('Number of movies test', () => {
  test('movies array == 8', () => {
    expect(movies(moviesArray)).toBe(8);
  });
});
