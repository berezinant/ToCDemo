import { mapSubstrings } from './map-substrings';

describe('mapSubstrings', () => {
  it('should return the string if the occurrences array is empty', () => {
    expect(mapSubstrings('foo', [])).toEqual('foo');
  });

  it('should wrap the substring in a span tag by default', () => {
    expect(mapSubstrings('foo bar foo', [[4, 6]])).toEqual('foo <span>bar</span> foo');
  });

  it('should wrap the substring in a tag returned by the map function', () => {
    expect(
      mapSubstrings('foo bar foo', [[4, 6]], (string: string) => `<span class="highlight">${string}</span>`)
    ).toEqual('foo <span class="highlight">bar</span> foo');
  });

  it('should wrap all substrings in a tag returned by the map function', () => {
    expect(
      mapSubstrings(
        'foo bar foo',
        [
          [0, 2],
          [8, 10],
        ],
        (string: string) => `<span class="highlight">${string}</span>`
      )
    ).toEqual('<span class="highlight">foo</span> bar <span class="highlight">foo</span>');
  });
});
