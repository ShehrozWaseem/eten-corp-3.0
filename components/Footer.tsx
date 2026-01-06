'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { EnvelopeIcon, MapPinIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Logo + Quick Links */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/offerings" className="text-gray-400 hover:text-brand-primary transition-colors">Our Offerings</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: How to Reach Out */}
          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300 mb-4">
              How to Reach Out to Us
            </h3>
            
            {/* Email Display */}
            <div className="flex items-center text-gray-400 mb-6">
              <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-accent" />
              <a href="mailto:info@etencorporation.com" className="hover:text-brand-primary transition-colors">
                info@etencorporation.com
              </a>
            </div>

            {/* Contact Form */}
            <p className="text-sm font-semibold text-gray-300 mb-3">Contact Us</p>
            <p className="text-sm text-gray-400 mb-4">
              Send us a message and we'll get back to you soon.
            </p>
            <form 
              className="space-y-3" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                const email = (e.target as any).email.value;
                window.location.href = `/contact?inquiry=${encodeURIComponent(email)}`; 
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="w-full bg-brand-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-brand-primary/90 transition-colors text-sm"
              >
                Contact Us
              </button>
              <p className="text-xs text-gray-500 text-center">
                Or{' '}
                <Link href="/contact" className="text-brand-accent hover:underline">
                  visit our contact page
                </Link>
              </p>
            </form>
          </div>

          {/* Column 3: Find Us - Map with Location */}
          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300 mb-4">Find Us</h3>
            
            {/* Address with Icon */}
            <div className="flex items-start text-gray-400 mb-4">
              <MapPinIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-brand-accent" />
              <span className="text-sm">
                Unit A4 - 9131 Keele Street<br/>
                Concord, ON, L4K 0G7<br/>
                Canada
              </span>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.958!2d-79.509918!3d43.835976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ed17ddaa101%3A0x29ed1948b85fb003!2s9131%20Keele%20St%2C%20Vaughan%2C%20ON%20L4K%200G7!5e0!3m2!1sen!2sca!4v1736200000000!5m2!1sen!2sca"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eten Corporation Location"
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
