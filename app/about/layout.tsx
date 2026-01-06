import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Eten Corporation | Our Story & Values',
  description: 'Learn about Eten Corporation\'s commitment to quality meats, ethical sourcing, and customer partnership across North America.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}