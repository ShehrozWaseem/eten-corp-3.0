import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 pr-4">
            <Logo />
            <p className="text-gray-400 leading-relaxed">
              Your premier partner in the meat industry, committed to quality, freshness, and food safety across North America.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/offerings" className="text-gray-400 hover:text-brand-primary transition-colors">Our Offerings</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPinIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-brand-accent" />
                <span>Unit A4 - 9131 Keele Street, Concord, ON, L4K 0G7</span>
              </li>
              <li className="flex items-center text-gray-400">
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-accent" />
                <a href="tel:+1-800-555-ETEN">+1 (800) 555-ETEN</a>
              </li>
              <li className="flex items-center text-gray-400">
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-accent" />
                <a href="mailto:info@etencorporation.com">info@etencorporation.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Find Us</h3>
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.9576442498455!2d-79.50991788732792!3d43.83597617097354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ed17ddaa101%3A0x29ed1948b85fb003!2s9131%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%200G7!5e0!3m2!1sen!2sca!4v1767738568029!5m2!1sen!2sca"
                width="100%"
                height="120"
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eten Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;