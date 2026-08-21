import { bimContent } from './bim-content';
import { mepDraftingContent } from './mep-drafting-content';
import type { ServiceContent } from './types';

export type { ServiceContent } from './types';

export const allContent: ServiceContent[] = [bimContent, mepDraftingContent];

export function getContentBySlug(slug: string): ServiceContent | undefined {
  return allContent.find((c) => c.slug === slug);
}

export function getContentById(id: string): ServiceContent | undefined {
  return allContent.find((c) => c.id === id);
}

export { bimContent, mepDraftingContent };
