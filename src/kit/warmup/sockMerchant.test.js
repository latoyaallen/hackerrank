import sockMerchant from './sockMerchant';

it('gives 0 when no match found', () => {
  expect(sockMerchant(2, [10, 20])).toEqual(0);
});
