'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-12"
        >
          News
        </motion.h1>

        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/images/coming-soon.jpg"
              alt="Coming Soon"
              width={400}
              height={300}
              className="rounded-lg shadow-xl mb-8"
            />
            <h2 className="text-3xl font-semibold mb-4 text-primary">Coming Soon</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We&apos;re working hard to bring you the latest news and updates. Our news page is under construction and will be available soon. Stay tuned for exciting content!
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">What to expect:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Breaking news updates</li>
              <li>In-depth analysis and reports</li>
              <li>Exclusive interviews</li>
              <li>Multimedia content</li>
              <li>Interactive features</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsPage;
