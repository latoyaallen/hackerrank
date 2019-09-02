import countingValleys from './countingValleys';

it('gives number of valleys', () => {
  expect(countingValleys(8, "UDDDUDUU")).toEqual(1);
});
