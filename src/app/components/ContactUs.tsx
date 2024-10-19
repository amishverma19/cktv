export default function ContactUs() {
  return (
    <section id="contact-us" className="my-12">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any queries or would like to advertise with us, please fill out the form below:
      </p>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:bg-accent transition-colors">
          Submit
        </button>
      </form>
    </section>
  );
}
