import Link from "next/link";

export function Footer() {
  const sections = [
    {
      title: "PLATFORM",
      links: [
        { name: "For Businesses", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "How It Works", href: "#" },
        { name: "Hire Talent", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "#" },
        { name: "Security", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Data Governance", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-transparent pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Kairos Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold dark:text-white">Kairos</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              The premium bridge for companies hiring exceptional remote talent with more speed, confidence, and cost efficiency.
            </p>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold tracking-widest text-gray-900 dark:text-white mb-6 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center md:text-left">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Kairos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
