import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { useSiteMetadata } from '../../metadata/use-metadata';
import ErrorSection from '../ui/error-section';
import Layout from '../ui/layout';

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Layout />
      <TanStackDevtools
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
  notFoundComponent: () => (
    <>
      <HeadContent />
      <ErrorSection />
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
