import { createFileRoute } from '@tanstack/react-router';

import { useSiteMetadata } from '../../metadata/use-metadata';
import { ResumePage } from '../resume/page';

export const Route = createFileRoute('/')({
  component: ResumePage,
  head: () => {
    const siteMetadata = useSiteMetadata();
    const description = `${siteMetadata.title} resume`;
    return {
      title: `Resume | ${siteMetadata.title}`,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: `Resume | ${siteMetadata.title}`,
        },
        {
          property: 'og:description',
          content: description,
        },
      ],
    };
  },
});
