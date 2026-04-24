import { Helmet } from 'react-helmet-async';

function getCanonicalUrl(pathname = '/') {
  if (typeof window === 'undefined') return pathname;
  const origin = window.location.origin;
  const base = origin.endsWith('/') ? origin.slice(0, -1) : origin;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export default function Seo({
  title = 'Phyo Thura | Software Developer',
  description = 'Phyo Thura — software developer building fast, accessible, and delightful web apps. Explore projects, skills, and contact details.',
  imagePath = '/Phyo.jpg',
  pathname = '/',
  noIndex = false,
}) {
  const canonicalUrl = getCanonicalUrl(pathname);
  const absoluteImageUrl = typeof window === 'undefined' ? imagePath : getCanonicalUrl(imagePath);
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

  const structuredData = noIndex
    ? null
    : {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Phyo Thura',
        url: canonicalUrl,
        image: absoluteImageUrl,
        jobTitle: 'Software Developer',
        sameAs: [
          'https://www.facebook.com/profile.php?id=100077023871140',
          'https://www.instagram.com/vik83124',
          'https://t.me/KP_Vv',
          'http://linkedin.com/in/phyothura21',
          'https://github.com/K2P4',
        ],
      };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {structuredData ? <script type="application/ld+json">{JSON.stringify(structuredData)}</script> : null}
    </Helmet>
  );
}
