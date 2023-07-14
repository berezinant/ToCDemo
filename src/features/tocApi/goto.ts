import { TocPageId } from '../../entities/toc';
import { emit } from '../../shared/utils';

export function goTo(tocPageId: TocPageId): void {
  emit('toc_goto', tocPageId);
}
