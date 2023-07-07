function spanMap(string: string): string {
  return `<span>${string}</span>`;
}

export function mapSubstrings(
  originalString: string,
  occurrences: number[][],
  map: (string: string) => string = spanMap
): string {
  if (!occurrences || occurrences.length === 0) {
    return originalString;
  }
  let result = '';
  let lastIndex = 0;

  occurrences.forEach(([start, end]) => {
    result += originalString.slice(lastIndex, start);
    const substring = originalString.slice(start, end + 1);
    result += map(substring);
    lastIndex = end + 1;
  });

  result += originalString.slice(lastIndex);

  return result;
}
