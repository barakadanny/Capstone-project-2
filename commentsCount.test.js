import comments from './__mocks__/commentsCount.js';

const commentList = [
  {
    username: 'John',
    comment: 'This is for testing',
  },
  {
    username: 'Jane',
    comment: 'I watched this movie',
  },
  {
    username: 'Kevin',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Happy to see this movie',
  },
  {
    username: 'Leah',
    comment: 'Nice movie',
  },
  {
    username: 'John',
    comment: 'This is for testing purposes',
  },
];
describe('Comments test', () => {
  test('comment List == 6', () => {
    expect(comments(commentList)).toBe(6);
  });
});
