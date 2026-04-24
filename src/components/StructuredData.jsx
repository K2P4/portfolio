import { Helmet } from 'react-helmet-async';

function absoluteUrl(pathname = '/') {
  if (typeof window === 'undefined') return pathname;
  const origin = window.location.origin;
  const base = origin.endsWith('/') ? origin.slice(0, -1) : origin;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Phyo Thura',
    url: absoluteUrl('/'),
    image: absoluteUrl('/Phyo.jpg'),
    jobTitle: 'Software Developer',
    sameAs: [
      'https://www.facebook.com/profile.php?id=100077023871140',
      'https://www.instagram.com/vik83124',
      'https://t.me/KP_Vv',
      'http://linkedin.com/in/phyothura21',
      'https://github.com/K2P4',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Phyo Thura',
    url: absoluteUrl('/'),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify([website, person])}</script>
    </Helmet>
  );
}

