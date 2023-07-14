import { emit } from '../../shared/utils';

export function filter(query: string): void {
  emit('toc_filter', query);
}
