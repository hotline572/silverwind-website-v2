export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: 'TSR Wheels',
    url: 'https://tsrwheels.com',
    description: 'Premium automotive wheels with 37 years of industry experience and a modern dealer program.',
    email: 'sales@tsrwheels.com',
    telephone: '+1-800-555-0137',
    areaServed: 'US',
    sameAs: ['https://tsrwheels.com']
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
