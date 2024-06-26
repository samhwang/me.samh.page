import type { MetaHTMLAttributes } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../metadata/use-metadata';

type MetaEl = MetaHTMLAttributes<HTMLMetaElement>;

export type SEOProps = {
  title: string;
  description?: string;
  meta?: MetaEl[] | MetaEl;
};

export default function SEO({ title, description = '', meta = [] }: SEOProps) {
  const defaultFallback = useSiteMetadata();
  const siteTitle = defaultFallback.title;
  const metaDescription = description || defaultFallback.description;
  const defaultMeta: MetaEl[] = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'viewport',
      content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ];

  const helmetMeta = meta ? defaultMeta.concat(meta) : defaultMeta;

  return (
    <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
      <title>{title}</title>
      <html lang="en" />
      {helmetMeta.map(({ name, property, content }) => {
        if (name) {
          return <meta key={name} name={name} content={content} />;
        }

        return <meta key={property} property={property && property} content={content} />;
      })}
    </Helmet>
  );
}
