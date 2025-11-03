import { createFileRoute } from '@tanstack/react-router';
import { useSiteMetadata } from '../../metadata/use-metadata';
import ResumePage from '../resume/page';

export const Route = createFileRoute('/')({
  component: ResumePage,
  head: () => {
    const siteMetadata = useSiteMetadata();
    return {
      title: `Resume | ${siteMetadata.title}`,
      meta: [
        {
          name: 'description',
          content: 'Sam Huynh resume',
        },
        {
          property: 'og:title',
          content: `Resume | ${siteMetadata.title}`,
        },
        {
          property: 'og:description',
          content: 'Sam Huynh resume',
        },
      ],
    };
  },
});
