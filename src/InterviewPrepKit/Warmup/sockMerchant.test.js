import sockMerchant from './sockMerchant';

it('gives 0 when no match found', () => {
  expect(sockMerchant(4, [10, 20, 30, 40])).toEqual(0);
});

it('gives 1 when one match found', () => {
  expect(sockMerchant(3, [10, 20, 20])).toEqual(1);
});

it('gives 3 when three  matchs found', () => {
  expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3);
});
