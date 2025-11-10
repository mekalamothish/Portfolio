import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  // Footer data
  const footerData = {
    name: "Mekala Mothish",
    year: new Date().getFullYear(),
    socials: [
      { icon: "Github", href: "https://github.com/mekalamothish", label: "GitHub" },
      { icon: "Linkedin", href: "https://linkedin.com/in/mekala-mothish-9b03981a6", label: "LinkedIn" },
      { icon: "Twitter", href: "https://twitter.com/", label: "Twitter" },
      { icon: "Mail", href: "mailto:mekalamothish1205@gmail.com", label: "Email" }
    ]
  };

  const iconMap:any = { Github, Linkedin, Mail, Twitter };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-lg font-bold text-white">Portfolio</div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Middle Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            {["About", "Projects", "Achievements", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            {["Resume", "Blog", "Case Studies", "Testimonials"].map(item => (
              <a
                key={item}
                href="#"
                className="block hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {footerData.socials.map(({ icon, href, label }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {footerData.year} {footerData.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map(link => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
