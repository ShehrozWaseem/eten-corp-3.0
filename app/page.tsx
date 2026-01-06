import React from 'react';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import ProductShowcase from '@/components/ProductShowcase';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eten Corporation - Premium Meat Distributor | Halal & Non-Halal Beef, Chicken, Turkey',
  description: 'Leading North American meat distributor specializing in premium beef, chicken, and turkey. Certified halal and non-halal options for Canada and USA.',
  keywords: 'meat distributor, halal meat, beef supplier, chicken distributor, turkey wholesale, Canada meat, USA meat supplier',
  openGraph: {
    title: 'Eten Corporation - Premium Meat Distributor',
    description: 'Leading North American meat distributor specializing in premium beef, chicken, and turkey.',
    url: 'https://eten-corp.com/',
    siteName: 'Eten Corporation',
    images: [
      {
        url: 'https://eten-corp.com/icon.jpg',
        width: 1200,
        height: 630,
        alt: 'Eten Corporation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eten Corporation - Premium Meat Distributor',
    description: 'Leading North American meat distributor specializing in premium beef, chicken, and turkey.',
    images: ['https://eten-corp.com/logo.png'],
  },
};

export default function HomePage() {
  const qualityFeatures = [
    {
      title: "Meticulous Inspection",
      description: "Every batch undergoes thorough inspection for freshness, flavor, and food safety before it reaches you."
    },
    {
      title: "Ethical Sourcing",
      description: "We partner exclusively with trusted North American farms that adhere to strict animal welfare standards."
    },
    {
      title: "Unmatched Reliability",
      description: "Our tailored operations and competitive pricing ensure you receive the best products with dependable service."
    }
  ];

  return (
    <div className="bg-brand-light overflow-x-hidden">
      <Carousel />
      
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
              Elevate Your Culinary Experience
            </h1>
            <p className="mt-6 text-lg text-brand-gray leading-relaxed">
              Welcome to Eten Corporation, your premier partner in the meat industry. Operating in Canada and the United States, we specialize in distributing top-quality beef, chicken, and turkey, offering certified halal and non-halal options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary tracking-tight">
              Our Commitment to Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-secondary text-center mb-3">{feature.title}</h3>
                <p className="text-brand-gray text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/beef-stew-scaled.jpeg" 
                alt="Quality Beef Stew" 
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand-secondary mb-4">The Eten Partnership Advantage</h3>
              <p className="text-brand-gray leading-relaxed text-lg mb-6">
                Choose Eten for personalized service, industry insights, and responsive support. We're here to help you succeed in the competitive food industry.
              </p>
              <Link href="/contact" className="inline-block bg-brand-primary text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ProductShowcase />
    </div>
  );
}