import { describe, expect, it } from 'vitest';

import { siteMetadata } from '../test-utils/mock-metadata';
import { Route as RootRoute } from './__root';
import { Route as IndexRoute } from './index';

// head() only reads from the mocked metadata hook, so the loader context is irrelevant.
const noContext = {} as never;

const metaContent = (meta: ReadonlyArray<object | undefined> | undefined, key: 'name' | 'property', value: string) =>
  (meta?.find((entry) => (entry as Record<string, unknown> | undefined)?.[key] === value) as { content?: string } | undefined)?.content;

describe('routes head()', () => {
  it('root route sets title, viewport, description and og:type', async () => {
    const head = await RootRoute.options.head?.(noContext);

    expect(head?.meta).toBeDefined();
    expect(metaContent(head?.meta, 'name', 'viewport')).toContain('width=device-width');
    expect(metaContent(head?.meta, 'name', 'description')).toBe(siteMetadata.description);
    expect(metaContent(head?.meta, 'property', 'og:type')).toBe('website');
    expect(head).toMatchObject({ title: siteMetadata.title });
  });

  it('index route sets resume title, description and og tags', async () => {
    const head = await IndexRoute.options.head?.(noContext);
    const title = `Resume | ${siteMetadata.title}`;
    const description = `${siteMetadata.title} resume`;

    expect(head).toMatchObject({ title });
    expect(metaContent(head?.meta, 'name', 'description')).toBe(description);
    expect(metaContent(head?.meta, 'property', 'og:title')).toBe(title);
    expect(metaContent(head?.meta, 'property', 'og:description')).toBe(description);
  });
});
