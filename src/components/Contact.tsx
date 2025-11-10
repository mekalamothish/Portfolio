import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import resumeFile from '../documents/Resume.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mekalamothish1205@gmail.com',
      href: 'mailto:mekalamothish1205@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 94409 35890',
      href: 'tel:+919440935890',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: 'https://www.google.com/maps/place/Andhra+Pradesh,+India',
    },
  ];

  const quickLinks = [
    {
      label: 'Download Resume',
      href: resumeFile, // You can place your resume file in the public folder as public/Resume.pdf
      download: true, 
    },
    {
      label: 'View GitHub',
      href: 'https://github.com/mekalamothish', // replace with your GitHub username
    },
    {
      label: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/mekala-mothish-9b03981a6/',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <p className="text-lg text-gray-600 mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info + Quick Links */}
          <div className="fade-in-left space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">
                          {info.label}
                        </p>
                        <p className="text-gray-900 font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                 <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? undefined : 'noopener noreferrer'}
                  download={link.download ? link.href : undefined} // 👈 enables actual file download
                  className="p-4 bg-blue-50 rounded-lg text-blue-600 font-semibold hover:bg-blue-100 transition-colors text-center"
                >
                  {link.label}
                </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
                    <p className="text-green-700 font-semibold">
                      Thank you! I'll get back to you soon.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
