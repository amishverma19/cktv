'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
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
          About CKTV News
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/cktv-studio.jpg"
              alt="CKTV News Studio"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-primary">Your Trusted News Source</h2>
            <p className="text-lg mb-6 text-gray-700">
              CKTV News is India&apos;s premier 24/7 news channel, dedicated to delivering accurate, timely, and unbiased news coverage to our viewers. With a team of experienced journalists and state-of-the-art technology, we bring you the latest updates from across the nation and around the globe.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our commitment to journalistic integrity and in-depth reporting has made us a trusted name in Indian media. We strive to inform, educate, and empower our audience with comprehensive coverage of politics, business, technology, entertainment, and more.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", description: "We uphold the highest standards of journalistic ethics and integrity in all our reporting." },
              { title: "Accuracy", description: "Our team is committed to fact-checking and delivering accurate information to our viewers." },
              { title: "Impartiality", description: "We present news without bias, ensuring a balanced perspective on all issues." }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
