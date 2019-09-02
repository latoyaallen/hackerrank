import jumpingOnClouds from './jumpingOnClouds';

it('gives 0 when no match found', () => {
  expect(jumpingOnClouds(7, [0, 0, 1, 0, 0, 1, 0])).toEqual(4);
});
