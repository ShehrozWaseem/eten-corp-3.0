import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Quote | Eten Corporation',
  description: 'Contact Eten Corporation for premium meat quotes. Serving Toronto, ON and New York, NY with reliable meat distribution.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}