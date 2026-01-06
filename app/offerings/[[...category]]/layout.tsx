import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products - Premium Beef, Chicken & Turkey | Eten Corporation',
  description: 'Explore our extensive selection of premium beef cuts, chicken, and turkey. Halal certified options available.',
};

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}