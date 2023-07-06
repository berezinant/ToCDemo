/** Find all occurrences of a string in another string. */
export function findOccurrences(string: string, query: string): number[][] {
  if (!string || !query) {
    return [];
  }
  const occurrences: number[][] = [];
  let index = -1;

  while ((index = string.indexOf(query, index + 1)) !== -1) {
    occurrences.push([index, index + query.length - 1]);
  }

  return occurrences;
}
