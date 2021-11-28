import validateWebsiteUrl from '../utils/validateWebsiteUrl';

test('check validation util', () => {
  expect(validateWebsiteUrl("https://stackoverflow.com/questions/36093638/unexpected-block-statement-surrounding-arrow-body")).toBe(true);
  expect(validateWebsiteUrl("https:")).toBe(false);
  expect(validateWebsiteUrl("https://www.google.com/")).toBe(true);
  expect(validateWebsiteUrl("http://cat")).toBe(false);
});
