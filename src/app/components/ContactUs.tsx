export default function ContactUs() {
  return (
    <section id="contact-us" className="my-12 bg-gradient-to-r from-primary to-accent text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-600">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-3 border-b-2 border-gray-300 focus:border-primary bg-transparent focus:outline-none transition duration-300 text-gray-800" 
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-3 border-b-2 border-gray-300 focus:border-primary bg-transparent focus:outline-none transition duration-300 text-gray-800" 
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-600">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-primary bg-transparent focus:outline-none transition duration-300 text-gray-800" 
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <p className="mb-4 flex items-center text-gray-800">
                <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                cktvindiabusiness@gmail.com
              </p>
              <p className="mb-4 flex items-center text-gray-800">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 90655 73678
              </p>
              <p className="mb-8 flex items-center text-gray-800">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                123 News Street, Media City, New Delhi, 110001, India
              </p>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1907976454!2d77.20651661508096!3d28.59997798243276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1623234567890!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
