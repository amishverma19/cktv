import Image from 'next/image';
import Link from 'next/link';
import NewsBroadcast from '../assets/images/aboutnews.jpg'

export default function AboutUs() {
  return (
    <section id="about-us" className="my-12 bg-background rounded-[40px] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-16 h-16 bg-background rounded-br-[40px]"></div>
      <div className="flex flex-col md:flex-row items-center p-8 md:px-4">
        <div className="md:w-1/2 relative mb-8 md:mb-0">
          <div className="absolute inset-0 bg-text rounded-[30px] transform -translate-x-4 -translate-y-4"></div>
          <div className="relative rounded-[30px] overflow-hidden">
            <Image
              src={NewsBroadcast.src}
              alt="CKTV India News Broadcast"
              // fill={true}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-primary-600 text-lg font-semibold mb-2">About CKTV India</h3>
          <h2 className="text-3xl font-bold mb-4">We Are Delivering Trusted News Across India</h2>
          <p className="text-gray-600 mb-6">
            CKTV India is a leading news network committed to providing accurate, timely, and unbiased 
            information to our viewers. With a team of dedicated journalists and cutting-edge technology, 
            we bring you the most relevant and impactful stories from across the nation and around the world.
          </p>
          <Link href="/about-us" className="bg-primary-600 text-[#154293] px-8 py-3 rounded-full inline-block font-semibold hover:bg-primary-700 transition-colors">
            ABOUT COMPANY &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
