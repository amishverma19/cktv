import MissionImg from '../assets/images/mission.webp'
import Image from 'next/image'

export default function Mission() {
  return (
    <section id="our-mission" className="my-12 bg-blue-100 p-8 rounded-lg flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 pr-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-800 border-b-2 border-yellow-500 pb-2 inline-block">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to provide fact-based, unbiased, and timely news to our viewers. We strive to empower our audience with accurate information, enabling them to make informed decisions about the world around them. CKTV India is committed to upholding the highest standards of journalism, promoting transparency, and fostering a well-informed society.
        </p>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0">
        <Image 
          src={MissionImg.src} 
          width={MissionImg.width}
          height={MissionImg.height}
          alt="Our Mission" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
}
