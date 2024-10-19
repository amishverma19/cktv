export default function Navigation() {
  const navItems = [
    'About Us',
    'Our Mission',
    'Our Vision',
    'Founder',
    'Popular News on YouTube',
    'Contact Us',
  ];

  return (
    <nav className="bg-secondary py-2">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white hover:text-accent transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

