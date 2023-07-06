import { findOccurrences } from './find-occurrences';

describe('findOccurrences', () => {
  it('should return empty array if no occurrences are found', () => {
    expect(findOccurrences('foo', 'bar')).toEqual([]);
  });

  it('should return an empty array if the query is empty', () => {
    expect(findOccurrences('foo', '')).toEqual([]);
  });

  it('should return an empty array if the string is empty', () => {
    expect(findOccurrences('', 'foo')).toEqual([]);
  });

  it('should return an empty array if the string and the query are empty', () => {
    expect(findOccurrences('', '')).toEqual([]);
  });

  it('should return an array of occurrences if there is only one occurrence', () => {
    expect(findOccurrences('foo bar foo', 'bar')).toEqual([[4, 6]]);
  });

  it('should return an array of occurrences', () => {
    expect(findOccurrences('foo bar foo', 'foo')).toEqual([
      [0, 2],
      [8, 10],
    ]);
  });
});
