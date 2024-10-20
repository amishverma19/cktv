import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Founder from './components/Founder';
import PopularNews from './components/PopularNews';
import ContactUs from './components/ContactUs';
import Slider from './components/Slider';
import Gallery from './components/Gallery';
import Navbar from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
       <Navbar />
      <Slider />
      <main className="flex-grow container mx-auto px-4 py-8">  

        <AboutUs />
        <Mission />
        <Vision />
        <Founder />
        <PopularNews />
        <Gallery />
        <ContactUs />
      </main>
    </div>
  );
}
