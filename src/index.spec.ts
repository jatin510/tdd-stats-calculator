// arrange - given
// act - when
// assert - then
import { IInputProps, Stats } from './index';

describe('Stats Calculator', () => {
  test('create an array of numbers', () => {
    const inputProps = { values: [2, 4, 21, -8, 53, 40] };
    const stats = Stats.create(inputProps);
    expect(stats.values).toEqual(inputProps.values);
  });

  test('throw error when the inputProps is invalid such as "NaN"', () => {
    const inputProps = { values: [2, 4, 21, NaN, 40] };
    const statsOutput = () => {
      Stats.create(inputProps);
    };
    expect(statsOutput).toThrowError();
  });
});

describe('Stats calculator functions', () => {
  let stats: Stats;
  let inputProps: IInputProps;

  beforeAll(() => {
    inputProps = { values: [1, 2, 21, -12, 24] };
    stats = Stats.create(inputProps);
  });

  test('get the minimum value in the stats calculator', () => {
    expect(stats.minimumValue()).toEqual(-12);
  });

  test('get the maximum value in the stats calculator', () => {
    expect(stats.maximumValue()).toEqual(24);
  });

  test('get the no. of values in the stats calculator', () => {
    expect(stats.valueCount()).toEqual(5);
  });

  test('get the average of all the values in the stats calculator', () => {
    expect(stats.getAverage()).toEqual(7.2);
  });
});
