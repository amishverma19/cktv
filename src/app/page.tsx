import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Founder from './components/Founder';
import PopularNews from './components/PopularNews';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <AboutUs />
        <Mission />
        <Vision />
        <Founder />
        <PopularNews />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
