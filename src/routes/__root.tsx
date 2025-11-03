import { createRootRoute, HeadContent } from '@tanstack/react-router';
import { useSiteMetadata } from '../../metadata/use-metadata';
import ErrorPage from '../404';
import Layout from '../resume/layout';

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Layout />
    </>
  ),
  notFoundComponent: () => (
    <>
      <HeadContent />
      <ErrorPage />
    </>
  ),
  head: () => {
    const siteMetadata = useSiteMetadata();

    return {
      title: siteMetadata.title,
      meta: [
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
        },
        {
          name: 'description',
          content: siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    };
  },
});
