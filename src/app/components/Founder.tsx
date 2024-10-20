import Image from 'next/image';
import FounderImage from '../assets/images/cktvsvg1.svg';

export default function Founder() {
  return (
    <section id="founder" className="my-12">
      <h2 className="text-2xl font-bold mb-4">About the Founder</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3">
          <Image 
            src={FounderImage.src} 
            alt="CKTV India Founder" 
            width={400}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold mb-2">Chitranjan Kushwaha</h3>
          <p className="text-lg">
            CKTV India was founded by Chitranjan Kushwaha, a visionary journalist with over two decades of experience in the media industry. Driven by a passion for truth and a commitment to journalistic integrity, [he/she] established CKTV India to redefine the standards of news reporting in the country. Chitranjan Kushwaha leadership and dedication have been instrumental in shaping CKTV India into the trusted news source it is today.
          </p>
        </div>
      </div>
    </section>
  );
}
