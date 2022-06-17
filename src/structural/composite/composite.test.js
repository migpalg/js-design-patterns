import { SingleValue, ManyValues, sum } from './composite';

describe('composite', function () {
  it('should sum up different objects', function () {
    let singleValue = new SingleValue(11);
    let otherValues = new ManyValues();
    otherValues.push(22);
    otherValues.push(33);
    expect(sum([singleValue, otherValues])).toEqual(66);
  });
});
