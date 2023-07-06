function spanMap(string: string): string {
  return `<span>${string}</span>`;
}

export function mapSubstrings(
  string: string,
  occurrences: number[][],
  map: (string: string) => string = spanMap
): string {
  let result = '';
  let lastIndex = 0;

  occurrences.forEach(([start, end]) => {
    // Добавляем часть строки до начала подстроки
    result += string.slice(lastIndex, start);

    // Оборачиваем подстроку в тэг <span>
    const substring = string.slice(start, end + 1);
    result += map(substring);

    lastIndex = end + 1;
  });

  // Добавляем оставшуюся часть строки после последней подстроки
  result += string.slice(lastIndex);

  return result;
}
