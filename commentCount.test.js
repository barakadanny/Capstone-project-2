import comments from './__mocks__/commentCount.js';

const listOfCommentsOne = [
  {
    username: 'John',
    comment: 'This is a comment',
  },
  {
    username: 'Jane',
    comment: 'I like this movie',
  },
  {
    username: 'Lea',
    comment: 'I hate this movie',
  },
  {
    username: 'Hong',
    comment: 'I have watched this movie',
  },
  {
    username: 'John',
    comment: 'This is a comment',
  },
];

describe('comments', () => {
  test('listOfCommentsOne == 5', () => {
    expect(comments(listOfCommentsOne)).toBe(5);
  });
});
