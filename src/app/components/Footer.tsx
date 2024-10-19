import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Advertise with Us', href: '/advertise' },
    { name: 'Careers', href: '/careers' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/cktvIndia', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', href: 'https://twitter.com/cktvIndia', icon: 'fab fa-twitter' },
    { name: 'YouTube', href: 'https://youtube.com/cktvIndia', icon: 'fab fa-youtube' },
    { name: 'Instagram', href: 'https://instagram.com/cktvIndia', icon: 'fab fa-instagram' },
  ];

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">CKTV India</h3>
            <p className="text-sm">Your Trusted News Source</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              {footerLinks.map((link) => (
                <li key={link.name} className="mb-1">
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {currentYear} CKTV India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

